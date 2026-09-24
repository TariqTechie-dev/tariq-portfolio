import Typewriter from "typewriter-effect";
import { Bio } from "../data/constant";

const Hero = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-[calc(100vh-80px)] w-full items-center justify-center overflow-hidden bg-slate-950 px-5 py-10 text-slate-50 transition-colors duration-300 sm:px-6 lg:px-16 lg:py-16 xl:px-20"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 text-center lg:flex-row-reverse lg:gap-16 lg:text-left xl:gap-20">

        {/* Profile Image Container */}
        <div className="flex shrink-0 items-center justify-center">
          <img
            src="/assets/images/profile3.jpeg"
            alt={Bio.name || "Tariq Hussain"}
            className="h-56 w-56 rounded-full object-cover object-center shadow-2xl ring-2 ring-cyan-400/80 sm:h-[350px] sm:w-[350px] lg:h-[410px] lg:w-[410px] xl:h-[450px] xl:w-[450px]"
          />
        </div>

        {/* Text Content Container */}
        <div className="mx-auto flex max-w-xl flex-col items-center sm:max-w-2xl lg:mx-0 lg:max-w-2xl lg:items-start">

          {/* Small Top Greeting */}
          <span className="mb-1 text-xl font-bold text-slate-400 sm:text-2xl">
            Hi, I am
          </span>

          {/* Big Bold Name */}
          <h1 className="mb-3 text-4xl font-black tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
            <span className="block bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent sm:inline">
              Tariq
            </span>
            <span className="hidden sm:inline"> </span>
            <span className="block bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent sm:inline">
              Hussain
            </span>
          </h1>

          {/* Typewriter Component Container */}
          <div className="mb-4 flex min-h-[32px] flex-wrap items-center justify-center gap-2 text-lg font-medium text-slate-400 sm:text-xl lg:justify-start lg:text-2xl">
            <span>I am a</span>
            <span className="font-semibold text-cyan-400">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </div>

          {/* Short Bio */}
          <p className="mb-8 text-center text-slate-400 text-[16px] font-light leading-relaxed sm:text-xl lg:text-left lg:text-lg lg:leading-8">
            {Bio.description}
          </p>

          {/* Resume Action Buttons */}
          <div className="flex w-full max-w-sm flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
            <a
              href={Bio.resume || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg bg-cyan-400 px-8 py-4 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition-all hover:bg-cyan-300 sm:w-auto sm:px-6 lg:w-48"
            >
              Check Resume
            </a>

            <a
              href={Bio.resumeDownload || Bio.resume || "#"}
              download="Tariq-Hussain-Resume.pdf"
              className="w-full rounded-lg border border-cyan-400/60 px-8 py-4 text-center text-sm font-semibold text-cyan-400 transition-all hover:bg-cyan-400/10 hover:text-cyan-300 sm:w-auto sm:px-6 lg:w-48"
            >
              Download Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
