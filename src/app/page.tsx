import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import {
  About,
  Experience,
  Skills,
  Projects,
  Education,
  Contact,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
