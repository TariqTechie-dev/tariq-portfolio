import { useState } from "react";
import { projects } from "../data/constant";

const Avatar = ({ src }) => (
  <img
    className="hidden h-70 w-auto cursor-pointer rounded-lg bg-black opacity-0 transition-all duration-300 group-hover:flex hover:opacity-80"
    src={src}
    alt="Project member"
  />
);

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <div
      onClick={() => setOpenModal({ state: true, project })}
      className="group h-[490px] w-[330px] cursor-pointer overflow-hidden rounded-[10px] bg-slate-900 px-5 py-[26px] shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 hover:brightness-110 hover:shadow-2xl"
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="h-[180px] w-full rounded-[10px] bg-white object-cover shadow-md"
      />

      {/* Project Tags */}
      <div className="mt-2 flex w-full flex-wrap items-center gap-2">
        {project.tags?.map((tag, index) => (
          <span
            key={index}
            className="rounded-[10px] bg-slate-800 px-2 py-[2px] text-xs font-normal text-cyan-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Project Details */}
      <div className="flex w-full flex-col gap-0 p-[2px]">
        <h2 className="overflow-hidden text-2xl font-semibold text-gray-200">
          {project.title}
        </h2>

        <div className="ml-[2px] text-xs font-normal text-gray-400 md:text-sm">
          {project.date}
        </div>

        <p className="mt-2 line-clamp-4 w-full overflow-hidden text-sm font-normal leading-6 text-gray-400">
          {project.description}
        </p>
      </div>

      {/* Project Members */}
      <div className="mt-3">
        {project.member?.map((member, index) => (
          <Avatar key={index} src={member.img} />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [openModal, setOpenModal] = useState({
    state: false,
    project: null,
  });

  return (
    <section
      id="projects"
      className="w-full overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Some projects I have built while learning and practicing web
            development.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              setOpenModal={setOpenModal}
            />
          ))}
        </div>

        {/* Modal  */}
        {openModal.state && (
          <div
            onClick={() => setOpenModal({ state: false, project: null })}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          >
            <div
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-lg rounded-2xl bg-slate-900 p-6 text-white"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {openModal.project?.title}
              </h3>

              <p className="mt-4 text-gray-300">
                {openModal.project?.description}
              </p>

              <button
                onClick={() => setOpenModal({ state: false, project: null })}
                className="mt-6 rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;