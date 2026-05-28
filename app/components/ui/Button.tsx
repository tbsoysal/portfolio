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
  width = 131,
  height = 35,
  fontSize = 16,
  onClick,
  href,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-normal transition-colors duration-200 whitespace-nowrap font-jakartasans";

  const styles: Record<ButtonVariant, string> = {
    primary: "bg-accent text-background hover:bg-accent-dark",
    secondary:
      "border border-text-primary text-text-primary bg-transparent hover:bg-text-primary hover:text-background",
  };

  const inlineStyles = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${styles[variant]} ${className}`}
        style={inlineStyles}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
      style={inlineStyles}
    >
      {label}
    </button>
  );
}