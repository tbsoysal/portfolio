"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./ui/Button";

export default function About() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const istanbulTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Europe/Istanbul",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(istanbulTime);
    };

    // Set time immediately on mount
    updateTime();

    // Update the clock every minute
    const timer = setInterval(updateTime, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="my-8">
      <h2 className="font-satoshi text-accent text-2xl tracking-tight font-bold mb-5">
        About me
      </h2>

      <div className="flex flex-col gap-5">
        {/* Top Location & Time Bar */}
        <div className="w-full max-w-3xl bg-accent rounded-full px-6 py-3 flex justify-between items-center text-white text-sm font-medium shadow-sm">
          <div className="flex items-center gap-2">
            {/* Simple Inline Location Pin SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Adana, Turkey</span>
          </div>
          <span>{time}</span>
        </div>

        {/* Main Profile Card */}
        <div className="w-full max-w-3xl bg-white rounded-4xl p-6 md:p-12 flex flex-col items-center text-center shadow-sm">
          {/* Profile Image Container */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 mb-6 overflow-hidden">
            <Image
              src="/images/profile-image.png"
              alt="Tahaberk Soysal"
              fill
              priority
              sizes="(max-width: 768px) 192px, 224px"
              className="object-cover grayscale"
            />
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-extrabold tracking-widest  text-text-primary">
              Open to work
            </span>
          </div>

          {/* Name and Title */}
          <h1 className="font-satoshi text-3xl md:text-5.5xl font-bold tracking-tight text-text-primary mb-2">
            Tahaberk SOYSAL
          </h1>
          <p className="font-satoshi text-2xl md:text-3xl text-text-primary mb-8 font-medium">
            Front-end Developer
          </p>

          {/* Action Buttons */}
          <div className="flex sm:flex-row gap-2 w-full sm:w-auto justify-center">
            <Button variant="primary" label="Download CV" />
            <Button variant="secondary" label="Contact me" href="#contact" />
          </div>
        </div>

        {/* Bio / Description Card */}
        <div className="w-full max-w-3xl bg-white rounded-4xl p-6  md:p-10 flex flex-col gap-6 text-base md:text-lg leading-relaxed text-text-primary shadow-sm">
          <p>
            I'm a front-end developer based in Turkey, focused on building
            products that solve real problems — not just writing code that
            passes review.
          </p>
          <p>
            I've built and shipped three projects independently: a SaaS
            reservation platform for soccer field owners, a resume builder with
            live preview and PDF export, and a Pomodoro Chrome extension built
            in collaboration with a designer. Each one taught me something
            tutorials never could.
          </p>
          <p>
            I'm comfortable owning features end to end — from idea to design to
            deployment. I think about the user, not just the ticket.
          </p>
          <p className="font-medium text-black">
            Currently looking for a remote front-end role at a small,
            product-focused team where I can contribute beyond the task list.
          </p>
        </div>
      </div>
    </section>
  );
}
