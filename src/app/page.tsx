import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Certificates from "@/components/Certificates";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
