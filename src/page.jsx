import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";

const Page = () => {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
          <Skills />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
          <Footer />
          <WhatsAppButton />
        </section>
      </main>
    </>
  );
};

export default Page;