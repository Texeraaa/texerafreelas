'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      description: 'ph.teixeira.ph2020@gmail.com',
      link: 'mailto:ph.teixeira.ph2020@gmail.com',
    },
    {
      icon: Phone,
      title: 'Telefone',
      description: '+55 (19) 99779-8101',
      link: 'tel:+5519997798101',
    },
    {
      icon: MapPin,
      title: 'Localização',
      description: 'São Paulo, Brasil',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Horário',
      description: 'Seg - Sex, 8h às 18h',
      link: '#',
    },
  ];

  // ...existing code...
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  // Substitua pelo seu número do WhatsApp
  const whatsappNumber = '5519997798101';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    // Captura page e utm da URL
    const page = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    for (const key of params.keys()) {
      if (key.startsWith('utm_')) {
        utm[key] = params.get(key) || '';
      }
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message, page, utm }),
      });
      const data = await res.json();
      if (data.ok) {
        // Mensagem pré-formatada para WhatsApp
        const waMsg = encodeURIComponent(
          `Olá, meu nome é ${name}. Assunto: ${subject}. Mensagem: ${message.substring(0, 60)}...`
        );
        window.open(`https://wa.me/${whatsappNumber}?text=${waMsg}`, '_blank');
        form.reset();
      } else {
        setError(data.error || 'Erro ao enviar.');
      }
    } catch (err) {
      setError('Erro inesperado.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">Contato</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Vamos trabalhar{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">juntos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Entre em contato para discutir seu projeto. Respondo em até 24 horas!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Entre em contato</h3>
              <p className="text-muted-foreground">
                Estou sempre interessado em novos projetos e oportunidades. Se você tem uma ideia ou
                precisa de ajuda com desenvolvimento, vamos conversar!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass-card-light hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium">{info.title}</h4>
                        <a
                          href={info.link}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          {info.description}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="glass-card">
            <CardContent className="p-8">
              <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome completo"
                      required
                      minLength={2}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sobre o que você gostaria de falar?"
                    required
                    minLength={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-me mais sobre seu projeto..."
                    rows={5}
                    required
                    minLength={10}
                  />
                </div>

                {error && <div className="text-red-500 text-sm text-center">{error}</div>}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full shadow-elegant"
                  disabled={loading}
                >
                  {loading ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
