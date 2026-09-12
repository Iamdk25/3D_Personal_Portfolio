import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import { navLinks, socials, contact } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.06] bg-[#050816]/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-16">
        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={() => setToggle(false)}
        >
          <img src={logo} alt="" className="h-10 w-10 object-contain" />
          <span className="hidden text-[15px] font-semibold text-white sm:block">
            Divyarajsinh Karmariya
            <span className="ml-2 font-mono text-[11px] font-normal uppercase tracking-[0.18em] text-secondary">
              Full-Stack &amp; AI
            </span>
          </span>
        </a>

        <ul className="hidden list-none flex-row items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`font-mono text-[12px] uppercase tracking-[0.16em] transition-colors duration-200 ${
                  active === link.id
                    ? "text-white"
                    : "text-secondary hover:text-white"
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.title}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] transition-colors duration-200 hover:border-[#915eff]/60"
              >
                <img src={social.icon} alt="" className="h-4 w-4 object-contain" />
              </a>
            ))}
          </div>

          <a
            href={contact.resumeUrl}
            download
            className="hidden rounded-lg border border-white/[0.12] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white-100 transition-colors duration-200 hover:border-[#915eff] hover:text-white sm:inline-flex"
          >
            Resume
          </a>

          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="h-7 w-7 cursor-pointer object-contain lg:hidden"
            onClick={() => setToggle((value) => !value)}
          />
        </div>
      </div>

      {toggle && (
        <div className="border-t border-white/[0.06] bg-[#050816]/95 px-6 pb-6 pt-4 lg:hidden">
          <ul className="flex list-none flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="font-mono text-[13px] uppercase tracking-[0.16em] text-secondary"
                  onClick={() => setToggle(false)}
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href={contact.resumeUrl}
                download
                className="font-mono text-[13px] uppercase tracking-[0.16em] text-[#915eff]"
                onClick={() => setToggle(false)}
              >
                Download resume
              </a>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.title}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08]"
              >
                <img src={social.icon} alt="" className="h-4 w-4 object-contain" />
              </a>
            ))}
          </div>
        </div>
      )}

      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-[#915eff] via-[#22d3ee] to-[#f59e0b]"
      />
    </nav>
  );
};

export default Navbar;
