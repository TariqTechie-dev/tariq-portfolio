import { skills } from "../data/constant";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 sm:py-20"
    >
      {/* Outer Wrapper: max-w-5xl aur mx-auto lagane se side margins automatic ban jayenge */}
      <div className="mx-auto w-full max-w-5xl px-2 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Grid Container: Cards Center Aligned */}
        <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2">
          {skills.map((category) => (
            <div
              key={category.title}
              className="w-full max-w-[460px] rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-5 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-cyan-400/10 sm:p-6"
            >
              {/* Category Title */}
              <h3 className="mb-5 text-center text-xl font-semibold text-gray-200 sm:text-2xl">
                {category.title}
              </h3>

              {/* Skill Pills */}
              <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-xs text-gray-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 sm:px-4 sm:py-2.5 sm:text-sm"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                    />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;