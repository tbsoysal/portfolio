import Button from "./Button";
import { ContactLinkCardProps } from "@/app/types/Types";

export default function ContactLinkCard({
  title,
  handle,
  buttonLabel,
  href,
}: ContactLinkCardProps) {
  return (
    <div className="w-full max-w-3xl bg-white rounded-3xl p-4 flex flex-col justify-between shadow-sm border border-transparent hover:border-gray-100 transition-all text-center gap-4">
      {/* Left Text Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">
          {title}
        </h3>
        <p className="text-sm md:text-base text-text-primary font-normal">
          {handle}
        </p>
      </div>

      {/* Right Action Button */}
      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        {/* Uses variant="secondary" for the outlined shape shown in the image */}
        <Button variant="primary" label={buttonLabel} className="p-2" />
      </a>
    </div>
  );
}
