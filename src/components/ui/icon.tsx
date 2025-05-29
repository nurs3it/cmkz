import { LucideIcon } from "lucide-react";
import { cn } from "@lib/utils";

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
}

export function Icon({
  icon: IconComponent,
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconProps) {
  return (
    <div className={cn("inline-flex", className)} {...props}>
      <IconComponent size={size} strokeWidth={strokeWidth} />
    </div>
  );
}
