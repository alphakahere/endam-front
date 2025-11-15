import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  children: ReactNode;
}

export default function Button({
  variant = "default",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-2xl text-sm font-medium transition-all font-poppins cursor-pointer";
  
  const variants = {
    default:
      "px-6 py-2 bg-gradient-to-b from-[#1B5E20] to-[#4FC3F7] text-white hover:shadow-lg",
    outline:
      "px-6 py-2 bg-transparent border border-primary text-primary hover:bg-primary/10",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

