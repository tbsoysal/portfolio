"use client"

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
    }
  return (
    <div className="rounded-xl p-6 bg-white mb-6">
      {/* Top Section: Image & Meta */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {project.imagesource && (
          <img 
            src={project.imagesource} 
            alt={`${project.title} mockup`} 
            className="w-full h-auto object-cover rounded-lg"
          />
        )}
        
        <div>
          <h3 className="text-xl font-bold text-accent mb-2">{project.title}</h3>
          <p className="text-text-primary text-base mb-4">{project.description}</p>
          
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1 mb-8">
            {project.techstack.map((tech) => (
              <span 
                key={tech} 
                className="px-2.5 py-0.5 text-xs border-2 border-accent text-accent-dark rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-2 text-sm text-accent">
            <Button href={project.links.github} label="Github" variant="secondary" />
            {project.links.site && <Button href={project.links.site} label="Live site" variant="primary" /> }
          </div>
        </div>
      </div>

      {/* Accordion Q&A Section */}
      <div className="space-y-5">
        {project.QA.map((qa, index) => {
          const isOpen = openIndex === index;
          const iconsrc = isOpen ? "/images/arrow-opened.png" : "/images/arrow-closed.png";

          return (
            <div key={index}>
            {index !== 0 && <hr className="opacity-20 mb-4"/>}
            <div 
              className="overflow-hidden"
            >
              {/* Trigger Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left font-medium transition-colors"
                type="button"
              >
                <span className="block pr-2">{qa.question}</span>
                {/* Chevron Arrow Indicator */}
                <Image src={iconsrc} alt="arrow icon" width={20} height={10} />
              </button>

              {/* Collapsible Content */}
              <div 
                className={`transition-all duration-350 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-full' : 'max-h-0'
                }`}
              >
                <div className="py-3 text-sm font-medium leading-6">
                    {qa.answer}
                </div>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}