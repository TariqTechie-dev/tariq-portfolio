import { useState } from "react";
import {
  PictureAsPdf,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";

const CertificationCard = ({ certification }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleOpenPDF = () => {
    window.open(certification.pdfUrl, "_blank", "noopener,noreferrer");
  };

  const toggleDescription = () => {
    setShowFullDescription((previousValue) => !previousValue);
  };

  const shortDescription = certification.description.slice(0, 100);

  return (
    <div className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-cyan-400/10">
      {/* Logo, title and organization */}
      
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-2 shadow-md">
          <img
            src={certification.logo}
            alt={`${certification.organization} logo`}
            className="h-full w-full rounded-full object-contain"
          />
        </div>

        <div className="min-w-0">
          <h3 className="line-clamp-2 text-base font-semibold text-white sm:text-lg">
            {certification.title}
          </h3>

          <p className="mt-1 text-sm font-medium text-cyan-400">
            {certification.organization}
          </p>

          <p className="mt-1 text-xs text-gray-400">
            {certification.date}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <p className="text-sm leading-6 text-gray-300">
          {showFullDescription
            ? certification.description
            : `${shortDescription}...`}
        </p>

        <button
          type="button"
          onClick={toggleDescription}
          className="mt-2 flex items-center gap-1 text-xs font-medium text-cyan-400 transition-colors hover:text-cyan-300"
        >
          {showFullDescription ? (
            <>
              Show less
              <ExpandLess fontSize="small" />
            </>
          ) : (
            <>
              Show more
              <ExpandMore fontSize="small" />
            </>
          )}
        </button>
      </div>

      {/* Certificate button */}
      <button
        type="button"
        onClick={handleOpenPDF}
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-400/20"
      >
        <PictureAsPdf fontSize="small" />
        <span className="text-sm sm:text-base">View Certificate</span>
      </button>
    </div>
  );
};

export default CertificationCard;