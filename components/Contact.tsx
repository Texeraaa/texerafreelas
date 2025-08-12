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
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input id="subject" placeholder="Sobre o que você gostaria de falar?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte-me mais sobre seu projeto..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full shadow-elegant">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
