import Typewriter from "typewriter-effect";
import { Bio } from "../data/constant";

const Hero = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-[calc(100vh-80px)] w-full items-center justify-center overflow-hidden bg-slate-950 px-6 py-8 lg:px-12"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-8 text-center lg:flex-row-reverse lg:gap-12 lg:text-left">
        
        {/* Profile Image (No Cutoff) */}
        <div className="flex shrink-0 items-center justify-center">
          <img
            src="/assets/images/profile.jpeg"
            alt={Bio.name || "Tariq Hussain"}
            className="h-[280px] w-[280px] rounded-full object-cover object-center ring-2 ring-cyan-400/50 sm:h-[350px] sm:w-[350px] lg:h-[350px] lg:w-[350px] shadow-2xl"
          />
        </div>

        {/* Text Area  */}
        <div className="flex max-w-lg flex-col items-center lg:items-start lg:mx-10 sm:max-2">
          
          {/* Small Top Greeting */}
          <span className="mb-1 text-xl font-medium text-gray-300 sm:text-2xl">
            Hi, I am
          </span>

          {/* Big Bold Name */}
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              {Bio.name}
            </span>
          </h1>

          {/* Typewriter */}
          <div className="mb-4 flex min-h-[32px] flex-wrap items-center justify-center gap-2 text-lg font-medium text-gray-200 sm:text-xl lg:justify-start lg:text-2xl">
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

          {/* Description Paragraph (Controlled Width) */}
          <p className="mb-6 text-sm font-normal leading-relaxed text-gray-400 sm:text-base">
            {Bio.description}
          </p>

          {/* Resume Buttons */}
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={Bio.resume || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-cyan-500 px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400 sm:px-6 sm:py-3 sm:text-sm"
            >
              Check Resume
            </a>

            <a
              href={Bio.resume || "#"}
              download
              className="rounded-lg border border-cyan-400/60 px-5 py-2.5 text-xs font-semibold text-cyan-400 transition-all hover:bg-cyan-400/10 sm:px-6 sm:py-3 sm:text-sm"
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