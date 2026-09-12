import { certifications } from "../data/constant";
import CertificationCard from "./CertificationCard";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Certifications
        </h2>

        {/* Section Description */}
        <p className="mt-4 max-w-2xl text-center text-sm leading-7 text-gray-400 sm:text-base">
          Professional certifications and credentials demonstrating my learning
          and development skills.
        </p>

        {/* Certifications Grid */}
        <div className="mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;