import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { contact, socials } from "../constants";
import { SectionWrapper } from "../hoc";
import { Reveal, SectionHeading } from "./ui";

const initialForm = { name: "", email: "", message: "" };

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_raibf13",
        "template_pkulou1",
        {
          from_name: form.name,
          to_name: "Divyarajsinh Karmariya",
          from_email: form.email,
          to_email: contact.email,
          message: form.message,
        },
        "BXpAYvRhlMHHbpQ1x"
      )
      .then(
        () => {
          setStatus("sent");
          setForm(initialForm);
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );
  };

  const inputClass =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-[14px] text-white placeholder:text-white/25 outline-none transition-colors duration-200 focus:border-[#915eff]/60";

  return (
    <>
      <SectionHeading
        kicker="05 — Contact"
        title="Let's build something."
        description="Open to full-time software engineering and AI/ML roles, research collaborations, and anything with an interesting problem attached."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <form ref={formRef} onSubmit={handleSubmit} className="panel p-7">
            <div className="grid gap-6">
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  Your name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className={inputClass}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  Your email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className={inputClass}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  Message
                </span>
                <textarea
                  rows={6}
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to build?"
                  className={`${inputClass} resize-y`}
                />
              </label>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              <p
                aria-live="polite"
                className={`font-mono text-[12px] ${
                  status === "error" ? "text-[#f59e0b]" : "text-secondary"
                }`}
              >
                {status === "sent" && "Thanks — I will get back to you shortly."}
                {status === "error" && "Something went wrong. Email me instead?"}
              </p>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex h-full flex-col gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="panel panel-hover flex items-center justify-between gap-4 p-5"
            >
              <span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  Email
                </span>
                <span className="mt-1.5 block text-[14px] text-white-100">
                  {contact.email}
                </span>
              </span>
              <span aria-hidden="true" className="text-[#915eff]">→</span>
            </a>

            {socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="panel panel-hover flex items-center justify-between gap-4 p-5"
              >
                <span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                    {social.title}
                  </span>
                  <span className="mt-1.5 block text-[14px] text-white-100">
                    {social.href.replace(/^https?:\/\/(www\.)?/, "")}
                  </span>
                </span>
                <span aria-hidden="true" className="text-[#915eff]">→</span>
              </a>
            ))}

            <a
              href={contact.resumeUrl}
              download
              className="panel panel-hover flex items-center justify-between gap-4 p-5"
            >
              <span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  Resume
                </span>
                <span className="mt-1.5 block text-[14px] text-white-100">
                  One-page PDF, print ready
                </span>
              </span>
              <span aria-hidden="true" className="text-[#915eff]">↓</span>
            </a>

            <p className="mt-auto font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
              {contact.location} · usually replies within a day
            </p>
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
