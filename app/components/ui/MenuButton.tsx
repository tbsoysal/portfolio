`use client`;

interface MenuButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MenuButton({ isOpen, setIsOpen }: MenuButtonProps) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-7.5 h-5 flex flex-col justify-between items-center group focus:outline-none"
      aria-label="Toggle main menu"
      aria-expanded={isOpen}
    >
      {/* Top Line */}
      <span
        className={`w-full h-0.75 bg-text-primary rounded-full transition-all duration-300 ease-in-out origin-left ${
          isOpen ? "rotate-45 translate-x-1 -translate-y-px" : ""
        }`}
      />

      {/* Middle Line */}
      <span
        className={`w-full h-0.75 bg-text-primary rounded-full transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0 scale-0" : ""
        }`}
      />

      {/* Bottom Line */}
      <span
        className={`w-full h-0.75 bg-text-primary rounded-full transition-all duration-300 ease-in-out origin-left ${
          isOpen ? "-rotate-45 translate-x-1 translate-y-0.75" : ""
        }`}
      />
    </button>
  );
}