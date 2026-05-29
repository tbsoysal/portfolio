type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  label: string;
  variant: ButtonVariant;
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({
  label,
  variant,
  onClick,
  href,
  className = "",
}: ButtonProps) {
  const base =
    "w-[131px] h-[35px] text-base md:w-[180px] md:h-[49px] inline-flex items-center justify-center rounded-full font-normal transition-colors duration-200 whitespace-nowrap font-jakartasans";

  const styles: Record<ButtonVariant, string> = {
    primary: "bg-accent text-background hover:bg-accent-dark",
    secondary:
      "border border-text-primary text-text-primary bg-transparent hover:bg-text-primary hover:text-background",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {label}
    </button>
  );
}