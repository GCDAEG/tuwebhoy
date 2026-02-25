import { iconMap, IconName } from "@/lib/icon-map";

type IconProps = {
  name: IconName;
  className?: string;
};

export function AppIcon({ name, className }: IconProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;

  return <Icon className={className} />;
}
