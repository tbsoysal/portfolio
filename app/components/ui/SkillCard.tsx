import Image from "next/image";
import { Skill } from "@/app/types/Types";

export default function SkillCard({ icon, label }: Skill) {
  return (
    <div className="flex flex-col items-center justify-start gap-3 max-w-full">
      <Image src={icon} alt="Skill Icon" width={59} height={55} />
      <h3 className="font-semibold text-sm text-center">{label}</h3>
    </div>
  );
}
