import Button from "./ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:gap-6 relative my-12 md:my-24">
      <div className="lg:max-w-[70%]">
        {/* Open to Work */}
        <div className="flex justify-center items-center lg:justify-start gap-2 mb-8 xl:absolute xl:-left-52 xl:top-62 xl:-rotate-90">
          <span className="block w-2.5 h-2.5 bg-green-500 rounded-full"></span>
          <span className="font-extrabold tracking-[3px] text-xs">
            Open to work | Adana/Turkey
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-5 md:mb-12 lg:text-start lg:text-[48px] xl:text-[72px] text-center font-satoshi font-black text-[36px] md:text-[48px] tracking-tight">
          Front-end developer who builds{" "}
          <span className="text-accent">solutions</span>, not just{" "}
          <span className="italic font-medium">interfaces.</span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex gap-4 mb-8 justify-center lg:justify-start">
          <Button label="See my work" variant="primary" href="#projects" />
          <Button label="Contact me" variant="secondary" href="#contact" />
        </div>
      </div>

      <div>
        <Image
          src="/images/hero-image.png"
          width={200}
          height={241}
          alt="Profile Photo of Tahaberk Soysal"
          className="md:w-70 md:h-auto lg:w-full lg:h-auto"
        />
      </div>
    </div>
  );
}
