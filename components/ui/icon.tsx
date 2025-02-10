import { icons } from "lucide-react";

export const LucideIcon = ({
  name,
  color,
  size,
  className,
}: {
  name: keyof typeof icons;
  color: string;
  size: number;
  className?: string;
}) => {
  const LucideIcon = icons[name as keyof typeof icons];

  return <LucideIcon color={color} size={size} className={className} />;
};

export const ReactIcon = ({
  name,
  color,
  size,
  className,
}: {
  name: string;
  color: string;
  size: number;
  className?: string;
}) => {
  const ReactIcon = icons[name as keyof typeof icons];

  return <ReactIcon color={color} size={size} className={className} />;
};
  