import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";


const Page = () => {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
            <Skills />
        </section>
      </main>
    </>
  );
};

export default Page;