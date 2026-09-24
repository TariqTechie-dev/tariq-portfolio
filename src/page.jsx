import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";

import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import Wrapper from "./components/layout/wrapper";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="h-20 w-full" aria-hidden="true" />

      <div className="w-full bg-slate-950 text-slate-50 transition-colors duration-300">
        <section id="home">
          <Hero />
        </section>

        <Wrapper>
          <section>
            <Skills />
          </section>
        </Wrapper>

        <section>
          <Projects />
        </section>

        <Wrapper>
          <section>
            <Education />
          </section>

          <section>
            <Certifications />
          </section>

          <section>
            <Contact />
          </section>
        </Wrapper>

        <Footer />
      </div>

      <WhatsAppButton />
    </>
  );
};

export default Page;
