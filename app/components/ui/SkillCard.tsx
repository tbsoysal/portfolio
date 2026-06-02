import Image from "next/image";
import { Skill } from "@/app/types/Types";

export default function SkillCard({ icon, label }: Skill) {
  return (
    <div className="flex flex-col items-center justify-start gap-3 md:gap-4 max-w-full">
      <Image
        src={icon}
        alt="Skill Icon"
        width={59}
        height={55}
        className="w-14.75 h-13.75 md:w-23.25 md:h-21.5 object-contain"
      />
      <h3 className="font-semibold text-sm md:text-md lg:text-lg text-center">
        {label}
      </h3>
    </div>
  );
}
