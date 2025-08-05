import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export default function About(){
    const skills = [
        "React", "Next.js", "TypeScript", "Node.js", 
        "PostgreSQL", "MongoDB", "AWS", "Docker", "Git"
    ];

    const achievements = [
        "2+ anos de experiência",
        "Especialista em tecnologias modernas"
    ];

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
                Desenvolvedor apaixonado por{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  criar soluções
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Sou um desenvolvedor full-stack com mais de 5 anos de experiência criando 
                aplicações web modernas e escaláveis. Minha paixão é transformar ideias 
                complexas em soluções digitais elegantes e funcionais.
              </p>
              <p>
                Especializo-me em tecnologias como React, Node.js e cloud computing, sempre 
                buscando as melhores práticas e mantendo-me atualizado com as últimas 
                tendências do mercado.
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
                <h3 className="text-xl font-semibold mb-6">Principais Tecnologias</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-hero">
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Pronto para começar?</h3>
                  <p className="text-muted-foreground">
                    Vamos discutir seu próximo projeto e como posso ajudar a torná-lo realidade.
                  </p>
                  <div className="pt-4">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-elegant transition-all duration-300"
                    >
                      Entrar em Contato
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
    )
}