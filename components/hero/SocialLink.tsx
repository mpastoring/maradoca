import { Instagram, LucideIcon, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type SocialLinkProps = {
  href: string;
  icon: string;
  label: string;
  isImage?: boolean;
};

// Map of icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Instagram: Instagram,
  Mail: Mail,
};

export default function SocialLink({
  href,
  icon,
  label,
  isImage,
}: SocialLinkProps) {
  if (isImage) {
    return (
      <Link href={href} className="transition-transform hover:scale-110">
        <Image
          src={icon}
          alt={label}
          width={24}
          height={24}
          className="invert"
        />
        <span className="sr-only">{label}</span>
      </Link>
    );
  }

  const IconComponent = iconMap[icon];
  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found in iconMap`);
    return null;
  }

  return (
    <Link href={href} className="transition-transform hover:scale-110">
      <IconComponent className="h-6 w-6" />
      <span className="sr-only">{label}</span>
    </Link>
  );
}
