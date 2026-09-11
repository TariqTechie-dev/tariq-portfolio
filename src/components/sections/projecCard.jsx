
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
      onClick={() =>
        setOpenModal({
          state: true,
          project: project,
        })
      }
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

export default ProjectCard;