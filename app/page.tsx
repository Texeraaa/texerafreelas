import About from "@/components/About";
import Hero from "@/components/Hero";

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
     </main>
    </div>
  );
}
