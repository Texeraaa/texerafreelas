'use client';

import { Card, CardContent } from '@/components/ui/card';
import { MonitorSmartphone, Store, TrendingUp, Wrench, UploadCloud, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesSimple() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const services = [
    {
      icon: MonitorSmartphone,
      title: 'Site Profissional',
      description:
        'Seu cartão de visitas digital! Site bonito, rápido e que funciona perfeitamente no celular.',
      features: [
        'Design moderno e atrativo',
        'Funciona em qualquer dispositivo',
        'Formulário de contato',
        'Seu site no ar com domínio próprio',
      ],
    },
    {
      icon: Store,
      title: 'Loja Virtual',
      description:
        'Venda online! Sistema completo para você gerenciar produtos, clientes e vendas.',
      features: [
        'Catálogo de produtos organizado',
        'Sistema de pagamentos',
        'Painel para gerenciar vendas',
        'Integração com WhatsApp',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Site que Vende',
      description:
        'Páginas criadas especialmente para converter visitantes em clientes e aumentar suas vendas.',
      features: [
        'Foco total em conversão',
        'Texto persuasivo e atrativo',
        'Botões que chamam ação',
        'Otimizado para aparecer no Google',
      ],
    },
    {
      icon: Sparkles,
      title: 'Transformação Digital',
      description:
        'Tire sua ideia do papel! Crio protótipos funcionais para você testar e validar seu projeto.',
      features: [
        'Do conceito ao site funcionando',
        'Versão para testar com clientes',
        'Tudo online e acessível',
        'Preparado para crescer junto com você',
      ],
    },
    {
      icon: Wrench,
      title: 'Melhorias no Seu Site',
      description:
        'Já tem um site? Vou deixá-lo mais bonito, rápido e funcional para atrair mais clientes.',
      features: [
        'Visual mais moderno',
        'Carregamento mais rápido',
        'Correção de problemas',
        'Funcionalidades novas',
      ],
    },
    {
      icon: UploadCloud,
      title: 'Colocamos no Ar',
      description:
        'Cuido de todos os detalhes técnicos para seu site ficar online com domínio profissional.',
      features: [
        'Seu site online em poucos dias',
        'Domínio personalizado (suaempresa.com.br)',
        'Certificado de segurança',
        'Suporte sempre que precisar',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">
            O que faço por você
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Soluções que fazem seu{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              negócio crescer
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Da ideia ao site funcionando, cuido de tudo para você brilhar na internet
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group glass-card-light hover:shadow-elegant transition-all duration-300 hover:border-primary/20 h-full">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-primary rounded-xl group-hover:shadow-glow transition-all duration-300">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
