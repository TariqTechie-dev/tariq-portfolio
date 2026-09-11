const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  if (!openModal?.state || !project) {
    return null;
  }

  const handleViewCode = () => {
    if (project.github) {
      window.open(project.github, "_blank", "noopener,noreferrer");
    }
  };

  const handleViewLiveApp = () => {
    if (project.webapp) {
      window.open(project.webapp, "_blank", "noopener,noreferrer");
    }
  };

  const handleCloseModal = () => {
    setOpenModal({
      state: false,
      project: null,
    });
  };

  return (
    <div
      onClick={handleCloseModal}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 px-3 py-8 sm:px-5"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative my-5 w-full max-w-[800px] rounded-2xl bg-slate-900 p-5 text-gray-200 shadow-2xl sm:p-7"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleCloseModal}
          aria-label="Close project details"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-xl text-gray-300 transition hover:bg-cyan-400 hover:text-slate-950"
        >
          ×
        </button>

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="mt-8 h-auto max-h-[420px] w-full rounded-xl object-cover shadow-md"
        />

        {/* Project Title */}
        <h2 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">
          {project.title}
        </h2>

        {/* Project Date */}
        {project.date && (
          <p className="mt-1 text-sm text-gray-400">
            {project.date}
          </p>
        )}

        {/* Project Tags */}
        <div className="my-4 flex flex-wrap gap-2">
          {project.tags?.map((tag, index) => (
            <span
              key={index}
              className="rounded-lg bg-slate-800 px-3 py-1 text-xs text-cyan-400 sm:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Description */}
        <p className="text-sm leading-7 text-gray-300 sm:text-base">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={handleViewCode}
            disabled={!project.github}
            className="w-full rounded-lg bg-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
          >
            View Code
          </button>

          <button
            type="button"
            onClick={handleViewLiveApp}
            disabled={!project.webapp}
            className="w-full rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
          >
            View Live App
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;