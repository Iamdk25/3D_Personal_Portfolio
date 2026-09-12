import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { Reveal, SectionHeading } from "./ui";

const ExperienceCard = ({ experience, index }) => (
  <Reveal delay={index * 0.04}>
    <article className="panel panel-hover p-6 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: experience.iconBg }}
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="h-6 w-6 object-contain"
            />
          </span>
          <div>
            <h3 className="text-[18px] font-semibold text-white sm:text-[19px]">
              {experience.title}
            </h3>
            <p className="mt-1 text-[13px] text-secondary">
              {experience.company_name}
            </p>
          </div>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-secondary">
          {experience.date}
        </p>
      </div>

      {experience.points.length > 0 && (
        <ul className="mt-6 space-y-3">
          {experience.points.map((point, pointIndex) => (
            <li
              key={pointIndex}
              className="flex gap-3 text-[14px] leading-[24px] text-white-100/85"
            >
              <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#915eff]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  </Reveal>
);

const Experience = () => {
  const railRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 75%", "end 45%"],
  });
  const scaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <>
      <SectionHeading
        kicker="02 — Experience"
        title="Four years of building, two of them shipping at scale."
        description="Internships, research and student leadership — the through-line is automation that removes manual work."
      />

      <div ref={railRef} className="relative mt-16">
        <div className="absolute bottom-6 left-[5px] top-6 w-[2px] rounded bg-white/[0.07]" />
        <motion.div
          style={{ scaleY }}
          className="absolute bottom-6 left-[5px] top-6 w-[2px] origin-top rounded bg-gradient-to-b from-[#915eff] via-[#915eff] to-[#22d3ee]"
        />

        <ul className="space-y-6">
          {experiences.map((experience, index) => (
            <li key={`${experience.company_name}-${experience.title}`} className="relative pl-9">
              <span className="absolute left-0 top-8 h-3 w-3 rounded-full border-2 border-[#915eff] bg-primary" />
              <ExperienceCard experience={experience} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
