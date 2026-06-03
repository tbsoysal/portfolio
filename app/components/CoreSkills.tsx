import SkillCard from "./ui/SkillCard";

export default function CoreSkills() {
  const Skills = [
    {
      icon: "/images/skill-icons/nextjs-icon.png",
      label: "Next.js",
    },
    {
      icon: "/images/skill-icons/reactjs-icon.png",
      label: "React",
    },
    {
      icon: "/images/skill-icons/tailwind-icon.png",
      label: "Tailwind CSS",
    },
    {
      icon: "/images/skill-icons/typescript-icon.png",
      label: "TypeScript",
    },
    {
      icon: "/images/skill-icons/javascript-icon.png",
      label: "JavaScript",
    },
    {
      icon: "/images/skill-icons/scss-icon.png",
      label: "SCSS",
    },
    {
      icon: "/images/skill-icons/git-icon.png",
      label: "Git",
    },
    {
      icon: "/images/skill-icons/figma-icon.png",
      label: "Figma",
    },
    {
      icon: "/images/skill-icons/supabase-icon.png",
      label: "Supabase",
    },
    {
      icon: "/images/skill-icons/vercel-icon.png",
      label: "Vercel",
    },
    {
      icon: "/images/skill-icons/vite-icon.png",
      label: "Vite",
    },
  ];
  return (
    <section id="skills" className="my-8">
      <h2 className="font-satoshi text-accent text-2xl md:text-[32px] lg:text-[48px] tracking-tight font-bold mb-10">
        Core skills
      </h2>

      <div className="grid grid-cols-4 max-w-3xl mx-auto gap-y-10">
        {Skills.map((skill, index) => {
          return <SkillCard key={index} {...skill} />;
        })}
      </div>
    </section>
  );
}
