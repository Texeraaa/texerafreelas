import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Mail, Phone, Linkedin, Github, Send, Clock, MapPin } from 'lucide-react';

export default function ContactProfessional() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ph.teixeira.ph2020@gmail.com',
      href: 'mailto:ph.teixeira.ph2020@gmail.com',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (19) 9 9779-8101',
      href: 'tel:+5519997798101',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Mogi Guaçu - São Paulo, Brasil • Remoto/Híbrido',
      href: null,
    },
    {
      icon: Clock,
      label: 'Disponibilidade',
      value: 'Disponível para início imediato',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pedrohteixeira17/',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Texeraaa',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">
            Vamos Conversar
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Interessado em{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Me Conhecer?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Estou aberto a novas oportunidades! Entre em contato para conversarmos sobre como posso
            contribuir com seu time e projetos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-card-light border-border/50">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Como Me Encontrar</h3>
                  <p className="text-sm text-muted-foreground">
                    Respondo em até 24h. Vamos agendar uma conversa!
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-muted-foreground mb-1">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium break-words">{item.value}</p>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a key={index} href={item.href} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border/50">
                  <p className="text-sm font-medium mb-4">Conecte-se</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 group"
                        >
                          <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          <span className="text-sm font-medium">{social.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability Card */}
            <Card className="glass-card-light border-border/50 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">Disponível para Contratação</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Aberto a oportunidades CLT, PJ ou freelas. Trabalho remoto, híbrido ou presencial
                  em São Paulo. Início imediato ou conforme necessidade.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card-light border-border/50">
              <CardContent className="p-8 md:p-10">
                <form action="/api/contact" method="POST" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Nome Completo <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Nome da empresa"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      Assunto <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Ex: Vaga de Desenvolvedor Full-Stack"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Mensagem <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Conte-me sobre a oportunidade, o time, stack tecnológica, modelo de contratação e próximos passos..."
                      required
                      className="min-h-[180px] resize-y"
                    />
                    <p className="text-xs text-muted-foreground">
                      Quanto mais detalhes sobre a vaga, melhor!
                    </p>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border/50">
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      Ao enviar este formulário, você concorda em ser contatado sobre oportunidades
                      de trabalho. Suas informações são tratadas com confidencialidade.
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto px-8 shadow-elegant">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="glass-card-light border-border/50 inline-block max-w-2xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Próximos Passos</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm mb-2">
                    1
                  </div>
                  <h4 className="font-semibold">Primeiro Contato</h4>
                  <p className="text-sm text-muted-foreground">
                    Envie uma mensagem e vou responder em até 24h
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm mb-2">
                    2
                  </div>
                  <h4 className="font-semibold">Conversa Inicial</h4>
                  <p className="text-sm text-muted-foreground">
                    Marcamos uma call para nos conhecermos melhor
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm mb-2">
                    3
                  </div>
                  <h4 className="font-semibold">Próximas Etapas</h4>
                  <p className="text-sm text-muted-foreground">
                    Entrevista técnica, alinhamento e início
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
