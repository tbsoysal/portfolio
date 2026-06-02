"use client";

import { useState } from "react";
import { ProjectItem } from "../../types/Types"; // Adjust path based on where you save types
import Image from "next/image";
import Button from "./Button";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rounded-xl p-6 bg-white mb-6 lg:p-12 lg:grid lg:grid-cols-2 lg:gap-12">
      {/* LEFT COLUMN: Text info & Accordion Q&A */}
      <div className="flex flex-col h-full">
        <div>
          {project.imagesource && (
            <div className="w-full relative justify-center items-center grow flex lg:hidden mb-8">
              <Image
                src={project.imagesource}
                alt={`${project.title} mockup`}
                width={600} // Increased width for better resolution on desktop grids
                height={360}
                className="w-full h-auto object-contain rounded-lg"
                priority
              />
            </div>
          )}
          <h3 className="text-xl font-bold text-accent mb-2 lg:text-3xl">
            {project.title}
          </h3>
          <p className="text-text-primary text-base mb-4 lg:text-lg">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.techstack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-xs border-2 border-accent text-accent-dark rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="gap-1 text-sm text-accent w-full justify-start flex lg:hidden lg:mt-auto">
          <Button
            href={project.links.github}
            label="GitHub Repo"
            variant="secondary"
          />
          {project.links.site && (
            <Button
              href={project.links.site}
              label="Go to site"
              variant="primary"
            />
          )}
        </div>

        {/* Accordion Q&A Section */}
        <div className="mt-4">
          {project.QA.map((qa, index) => {
            const isOpen = openIndex === index;
            const iconsrc = isOpen
              ? "/images/arrow-opened.png"
              : "/images/arrow-closed.png";

            return (
              <div key={index}>
                {index !== 0 && <hr className="opacity-20" />}
                <div className="overflow-hidden">
                  {/* Trigger Button */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center text-left font-semibold transition-colors text-base lg:text-lg hover:bg-accent hover:text-white cursor-pointer py-3 lg:p-3"
                    type="button"
                  >
                    <span className="block pr-2">{qa.question}</span>
                    {/* Chevron Arrow Indicator */}
                    <Image
                      src={iconsrc}
                      alt="arrow icon"
                      width={20}
                      height={10}
                    />
                  </button>

                  {/* Collapsible Content */}
                  <div
                    className={`transition-all duration-350 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-full" : "max-h-0"
                    }`}
                  >
                    <div className="pb-3 text-sm lg:text-base font-medium leading-6 text-text-secondary">
                      {qa.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT COLUMN: Mockup Image & CTAs */}
      <div className="flex-col items-center justify-between h-full gap-6 mt-8 lg:mt-0 order-2 lg:order-2 align-start hidden lg:flex">
        {project.imagesource && (
          <div className="w-full relative justify-center items-center grow hidden lg:flex">
            <Image
              src={project.imagesource}
              alt={`${project.title} mockup`}
              width={600} // Increased width for better resolution on desktop grids
              height={360}
              className="w-full h-auto object-contain rounded-lg"
              priority
            />
          </div>
        )}

        {/* Links aligned at the bottom right on desktop */}
        <div className="gap-4 text-sm text-accent w-full justify-end hidden lg:flex lg:mt-auto">
          <Button
            href={project.links.github}
            label="GitHub Repo"
            variant="secondary"
          />
          {project.links.site && (
            <Button
              href={project.links.site}
              label="Go to site"
              variant="primary"
            />
          )}
        </div>
      </div>
    </div>
  );
}
