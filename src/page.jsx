import React from "react";

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

      <div className="w-full bg-slate-950">
        <section id="home">
          <Hero />
        </section>

        <Wrapper>
          <section id="skills">
            <Skills />
          </section>
        </Wrapper>

        <section id="projects">
          <Projects />
        </section>

        <Wrapper>
          <section id="education">
            <Education />
          </section>

          <section id="certifications">
            <Certifications />
          </section>

          <section id="contact">
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