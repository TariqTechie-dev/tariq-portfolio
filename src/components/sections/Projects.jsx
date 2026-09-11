import { useState } from "react";
import { projects } from "../data/constant";
import ProjectCard from "./projecCard";
import ProjectDetails from "./ProjectDetails";

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

        {/* Project Details Modal */}
        <ProjectDetails
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </div>
    </section>
  );
};

export default Projects;