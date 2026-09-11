import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";


const Page = () => {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
            <Skills />
            <Projects />
        </section>
      </main>
    </>
  );
};

export default Page;