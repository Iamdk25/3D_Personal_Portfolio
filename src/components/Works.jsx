import React from "react";

import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { Reveal, SectionHeading } from "./ui";

const ProjectCard = ({ project, index }) => (
  <Reveal delay={(index % 3) * 0.07} className="h-full">
    <article className="panel panel-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#050816]/80 px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] text-secondary">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[18px] font-semibold leading-[26px] text-white">
          {project.name}
        </h3>
        <p className="mt-3 flex-1 text-[13.5px] leading-[24px] text-secondary">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={`${project.name}-${tag.name}`} className="tag">
              {tag.name}
            </li>
          ))}
        </ul>

        <a
          href={project.source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-[#915eff] transition-colors duration-200 hover:text-white"
        >
          View source
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  </Reveal>
);

const Works = () => (
  <>
    <SectionHeading
      kicker="04 — Projects"
      title="Selected work."
      description="Three projects I led end to end — a deterministic RAG learning platform, an expense manager used by 1,000+ people, and a predictive market-analysis tool."
    />

    <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.name} project={project} index={index} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, "projects");
