import React from "react";

import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { Reveal, SectionHeading } from "./ui";

/**
 * The icons themselves are rendered in 3D by TechOrbit inside the shared
 * canvas; this section reserves the space they occupy and keeps the stack
 * readable (and indexable) as text.
 */
const Tech = () => (
  <div className="flex min-h-[78vh] flex-col justify-between">
    <SectionHeading
      kicker="03 — Stack"
      title="Tools I reach for."
      description="Daily drivers across the stack — from the model and the API to the interface and the container it ships in."
    />

    <div className="h-[38vh] min-h-[240px]" aria-hidden="true" />

    <Reveal>
      <ul className="flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <li key={technology.name} className="tag">
            {technology.name}
          </li>
        ))}
      </ul>
    </Reveal>
  </div>
);

export default SectionWrapper(Tech, "tech");
