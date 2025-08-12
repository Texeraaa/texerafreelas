import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { resend } from '@/lib/resend'; // Você pode criar um wrapper para a API do Resend em lib/resend.ts

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
  page: z.string().optional(),
  utm: z.record(z.string(), z.string()).optional(),
});

const redis = Redis.fromEnv();
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '1m'),
});

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'anonymous';
  const body = await req.json();
  const parse = contactSchema.safeParse(body);
  if (!parse.success) {
    return NextResponse.json(
      { error: 'Dados inválidos', details: parse.error.issues },
      { status: 400 }
    );
  }

  // Rate limit
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return NextResponse.json(
      { error: 'Limite de requisições atingido. Tente novamente em breve.' },
      { status: 429 }
    );
  }

  const { name, email, subject, message, page, utm } = parse.data;

  // Enviar e-mail
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ph.teixeira.ph2020@gmail.com',
      subject: `Novo lead: ${subject} — ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nAssunto: ${subject}\nMensagem: ${message}\nPágina: ${page || ''}\nUTM: ${JSON.stringify(utm || {})}`,
    });
    // (Opcional) Salvar lead (simulado)
    console.log('Novo lead:', { name, email, subject, message, page, utm });
    return NextResponse.json({ ok: true });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: 'Erro ao enviar e-mail.', details: errorMessage },
      { status: 500 }
    );
  }
}
