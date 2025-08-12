"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  MonitorSmartphone,
  LayoutDashboard,
  DatabaseZap,
  Wrench,
  UploadCloud, 
  Rocket} from "lucide-react";
import { motion } from "framer-motion";

export default function Services(){

      const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };


const services = [
  {
    icon: MonitorSmartphone,
    title: "Sites e Landing Pages",
    description: "Criação de sites institucionais e landing pages modernas, otimizadas para dispositivos móveis.",
    features: [
      "Design responsivo",
      "Performance e SEO básico",
      "Formulários de contato",
      "Hospedagem com domínio e SSL",
    ],
  },
  {
    icon: DatabaseZap,
    title: "Sistemas Web Personalizados",
    description: "Desenvolvimento completo de aplicações web sob medida para negócios e projetos digitais.",
    features: [
      "Frontend com Next.js + Tailwind",
      "Backend com NestJS ou Node.js",
      "Banco de dados relacional ou NoSQL",
      "Autenticação, CRUDs e integrações básicas",
    ],
  },
  {
    icon: LayoutDashboard, 
    title: "Painéis e Dashboards",
    description: "Interfaces administrativas para gestão de dados, clientes, serviços e conteúdos.",
    features: [
      "Visual moderno e intuitivo",
      "Filtros, gráficos e tabelas",
      "Integração com bancos de dados",
      "Permissões por tipo de usuário",
    ],
  },
  {
  icon: Rocket, 
  title: "Protótipos e MVPs para Startups",
  description: "Desenvolvimento ágil de protótipos e produtos mínimos viáveis para validar ideias e captar investimento.",
  features: [
    "Criação rápida de interfaces funcionais",
    "Backend com autenticação e banco de dados",
    "Deploy completo com domínio e versão pública",
    "Preparado para evoluir conforme o crescimento",
  ],
},
  {
    icon: Wrench, 
    title: "Aprimoramento e Refatoração de Códigos",
    description: "Melhorias em sistemas existentes com foco em organização, performance e escalabilidade.",
    features: [
      "Refatoração de componentes",
      "Melhoria de estrutura e layout",
      "Correção de bugs",
      "Atualização para boas práticas modernas",
    ],
  },
  {
    icon: UploadCloud, 
    title: "Publicação e Deploy de Projetos",
    description: "Coloco seu projeto no ar com domínio personalizado e performance otimizada.",
    features: [
      "Deploy em Vercel, Render ou outros",
      "Configuração de domínio e HTTPS",
      "Builds otimizadas",
      "Atualizações e manutenção básica",
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
            Serviços
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Como posso ajudar seu{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              negócio
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ofereço soluções completas em desenvolvimento web, desde o planejamento até o deploy
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
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
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
    )
}