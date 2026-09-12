const EducationCard = ({ education }) => {
  return (
    <div className="w-full rounded-2xl border border-cyan-400/20 bg-slate-900 p-5 shadow-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-400/10 sm:p-6">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-slate-800 p-2">
          <img
            src={education.img}
            alt={education.school}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold leading-7 text-white sm:text-xl">
            {education.degree}
          </h3>

          <p className="mt-2 text-sm font-semibold text-cyan-400">
            {education.school}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            {education.date}
          </p>

          <p className="mt-1 text-sm font-semibold text-emerald-400">
            Grade: {education.grade}
          </p>

          <p className="mt-3 text-sm leading-6 text-gray-300">
            {education.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;