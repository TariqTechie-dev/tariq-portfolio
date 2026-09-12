import { education } from "../data/constant";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Academic Journey
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Education
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            My educational background and academic achievements.
          </p>
        </div>

        <Timeline
          sx={{
            p: 0,
            // Right alignment secure karne ke liye
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {education.map((educationItem) => (
            <TimelineItem
              key={educationItem.id}
              sx={{
                "&::before": {
                  display: "none", // Empty space remove karne ke liye
                },
                width: "100%",
                maxWidth: "800px", // Card container width match karne ke liye
              }}
            >
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <EducationCard education={educationItem} />
              </TimelineContent>

              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    backgroundColor: "#22d3ee",
                    boxShadow: "0 0 0 4px rgba(34, 211, 238, 0.15)",
                    margin: "12px 0",
                  }}
                />

                {/* Yahan se condition (index !== education.length - 1) hata di hai taake 3rd card ke sath bhi line bane */}
                <TimelineConnector
                  sx={{
                    backgroundColor: "rgba(34, 211, 238, 0.4)",
                    width: "2px",
                  }}
                />
              </TimelineSeparator>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Education;