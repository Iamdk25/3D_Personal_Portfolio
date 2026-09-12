import React from "react";

import { styles } from "../styles";
import { contact, metrics } from "../constants";
import { Reveal } from "./ui";

const Hero = () => (
  <section id="home" className="relative flex min-h-screen w-full items-center">
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_620px_at_18%_38%,rgba(5,8,22,0.94),rgba(5,8,22,0.6)_46%,transparent_74%)]"
      aria-hidden="true"
    />

    <div className={`${styles.paddingX} relative mx-auto w-full max-w-7xl pb-24 pt-36`}>
      <div className="max-w-3xl">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22d3ee] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22d3ee]" />
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-secondary">
              Open to full-time SWE / AI roles
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className={`${styles.heroHeadText} mt-7`}>
            Hi, I&apos;m Divyarajsinh{" "}
            <span className="text-[#915eff]">Karmariya</span>.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className={`${styles.heroSubText} mt-7`}>
            I build full-stack AI systems — PyTorch and RAG pipelines behind
            React interfaces that stay smooth at a million data points.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">
              View projects
            </a>
            <a
              href={contact.resumeUrl}
              download
              className="btn btn-ghost"
            >
              Download resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="font-mono text-[26px] font-semibold leading-none text-white sm:text-[30px]">
                  {metric.value}
                </dt>
                <dd className="mt-2 text-[13px] leading-[20px] text-secondary">
                  {metric.label}
                </dd>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                  {metric.context}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </div>

    <a
      href="#about"
      aria-label="Scroll to about"
      className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-secondary">
        Scroll
      </span>
      <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
        <span className="h-1.5 w-1.5 animate-scroll-cue rounded-full bg-[#915eff]" />
      </span>
    </a>
  </section>
);

export default Hero;
