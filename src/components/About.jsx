import React from "react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { Reveal, SectionHeading } from "./ui";

const facts = [
  { label: "Education", value: "B.S. Computer Science, University of South Florida" },
  { label: "Graduating", value: "December 2026 · 3.81 GPA · Dean's Honors" },
  { label: "Focus", value: "Full-stack engineering, applied AI/ML, data visualization" },
  { label: "Certifications", value: "CodePath: iOS Development, Technical Interview Prep, AI Engineering" },
];

const About = () => (
  <>
    <SectionHeading
      kicker="01 — About"
      title="Machine learning that actually ships."
      description="I work where the model meets the product: pipelines on the back end, interfaces on the front, and the plumbing that keeps both alive."
    />

    <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
      <Reveal className="space-y-6 text-[15px] leading-[30px] text-secondary sm:text-[16px]">
        <p>
          I am a Computer Science senior at the University of South Florida,
          currently a Software Engineering Intern at AbbVie and an AI/ML
          Research Assistant at USF&apos;s Bellini College of AI, Cybersecurity,
          and Computing.
        </p>
        <p>
          Lately that has meant cutting drug-discovery turnaround by 20% with an
          MLOps pipeline over I-JEPA PyTorch embeddings, pushing bioinformatics
          dashboards to 1M+ concurrent points at 60 fps with WebGPU and Web
          Workers, and helping build a CanvasLTI platform that flags at-risk
          learners with 83.3% accuracy.
        </p>
        <p className="text-white-100">
          I care about systems that hold up outside the demo — measured,
          tested, and readable six months later.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <aside className="panel h-full p-7">
          <p className="kicker">At a glance</p>
          <dl className="mt-6 space-y-5">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-[14px] leading-[24px] text-white-100">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </Reveal>
    </div>

    <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <Reveal key={service.title} delay={index * 0.06} className="h-full">
          <article className="panel panel-hover h-full p-6">
            <div className="flex items-center justify-between">
              <img
                src={service.icon}
                alt=""
                className="h-9 w-9 object-contain"
              />
              <span className="font-mono text-[11px] text-white/25">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-6 text-[17px] font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-3 text-[13px] leading-[23px] text-secondary">
              {service.description}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");
