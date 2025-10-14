import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export default function AboutSimple() {
  const benefits = [
    'Sites modernos',
    'Funcionam no celular',
    'Carregam rápido',
    'Aparecem no Google',
    'Design profissional',
    'Suporte completo',
  ];

  const achievements = ['Mais de 2 anos criando sites', 'Clientes satisfeitos em todo Brasil'];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold tracking-wide uppercase text-sm">
                Sobre Mim
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Seu parceiro para{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  criar presença online
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Olá! Sou especialista em criar sites que realmente funcionam para seu negócio. Não
                importa se você tem uma loja, consultório, empresa ou projeto pessoal - eu crio a
                solução perfeita para você brilhar na internet.
              </p>
              <p>
                Meu foco é simples: fazer sites bonitos, rápidos e que trazem resultados. Você não
                precisa entender de tecnologia - eu cuido de tudo para você!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">O que você ganha</h3>
                <div className="flex flex-wrap gap-3">
                  {benefits.map((benefit, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-hero">
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Vamos começar seu projeto?</h3>
                  <p className="text-muted-foreground">
                    Conte sua ideia e eu crio o site perfeito para seu negócio decolar!
                  </p>
                  <div className="pt-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-elegant transition-all duration-300"
                    >
                      Quero Meu Site
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
