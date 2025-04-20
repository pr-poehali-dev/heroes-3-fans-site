import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface HeroesButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  animate?: boolean;
}

const HeroesButton = ({ 
  className, 
  children, 
  variant = "primary", 
  size = "default",
  animate = false,
  ...props 
}: HeroesButtonProps) => {
  return (
    <button
      className={cn(
        "pixel-button font-pixel uppercase tracking-wider",
        variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        size === "large" && "text-xl px-8 py-3",
        animate && "animate-pixel-pulse",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default HeroesButton;
