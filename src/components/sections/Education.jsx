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
      className="bg-slate-950 px-4 py-16 text-slate-50 transition-colors duration-300 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Academic Journey
          </p>

          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
            Education
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            My educational background and academic achievements.
          </p>
        </div>

        <Timeline
          sx={{
            p: 0,

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
                  display: "none",
                },
                width: "100%",
                maxWidth: "800px",
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