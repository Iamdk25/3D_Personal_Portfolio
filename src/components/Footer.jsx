import React from "react";

import { contact, navLinks, socials } from "../constants";
import { logo } from "../assets";

const Footer = () => (
  <footer className="relative z-0 border-t border-white/[0.06] bg-[#050816]/80">
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12 sm:px-16 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} alt="" className="h-10 w-10 object-contain" />
        <div>
          <p className="text-[14px] font-semibold text-white">
            Divyarajsinh Karmariya
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
            {contact.location} · Built with React, three.js &amp; Tailwind
          </p>
        </div>
      </div>

      <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-secondary transition-colors duration-200 hover:text-white"
          >
            {link.title}
          </a>
        ))}
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-secondary transition-colors duration-200 hover:text-white"
          >
            {social.title}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
