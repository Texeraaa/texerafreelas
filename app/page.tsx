import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="min-h-screen">
     <main>
       <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
     </main>
    </div>
  );
}
