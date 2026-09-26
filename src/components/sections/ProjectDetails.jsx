import { useEffect, useRef } from "react";

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const handleCloseModal = () => {
    setOpenModal({ state: false, project: null });
  };

  useEffect(() => {
    if (!openModal?.state) return undefined;

    const previousOverflow = document.body.style.overflow;
    triggerRef.current = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenModal({ state: false, project: null });
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = document.querySelectorAll(
        '#project-dialog button:not([disabled]), #project-dialog a[href]'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [openModal?.state, setOpenModal]);

  if (!openModal?.state || !project) return null;

  return (
    <div
      id="project-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-details-title"
      onClick={handleCloseModal}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 px-3 py-8 sm:px-5"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative my-5 w-full max-w-[800px] rounded-2xl border border-slate-800 bg-slate-900 p-5 text-slate-400 shadow-2xl sm:p-7"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={handleCloseModal}
          aria-label="Close project details"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-xl text-slate-400 transition hover:bg-cyan-400 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          &times;
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="mt-8 h-auto max-h-[420px] w-full rounded-xl object-cover shadow-md"
        />

        <h2 id="project-details-title" className="mt-5 text-2xl font-semibold text-slate-50 sm:text-3xl">
          {project.title}
        </h2>

        {project.date && <p className="mt-1 text-sm text-slate-500 dark:text-gray-400">{project.date}</p>}

        <div className="my-4 flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span key={tag} className="rounded-lg bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400 sm:text-sm">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm leading-7 text-slate-600 dark:text-gray-300 sm:text-base">{project.description}</p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <a
            href={project.github || undefined}
            target="_blank"
            rel="noreferrer"
            aria-disabled={!project.github}
            className={`w-full rounded-lg bg-slate-100 px-5 py-3 text-center text-sm font-semibold text-slate-800 transition hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 sm:w-auto ${!project.github ? "pointer-events-none opacity-40" : ""}`}
          >
            View Code
          </a>
          <a
            href={project.webapp || undefined}
            target="_blank"
            rel="noreferrer"
            aria-disabled={!project.webapp}
            className={`w-full rounded-lg bg-cyan-400 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto ${!project.webapp ? "pointer-events-none opacity-40" : ""}`}
          >
            View Live App
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
