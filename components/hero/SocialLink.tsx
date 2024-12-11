import Image from "next/image";
import Link from "next/link";

type SocialLinkProps = {
  href: string;
  icon: React.ComponentType<{ className?: string }> | string;
  label: string;
  isImage?: boolean;
};

export default function SocialLink({
  href,
  icon: Icon,
  label,
  isImage = false,
}: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-110"
    >
      {isImage ? (
        <Image
          src={Icon as string}
          alt={label}
          width={24}
          height={24}
          className="h-6 w-6 invert"
        />
      ) : (
        <Icon className="h-6 w-6" />
      )}
      <span className="sr-only">{label}</span>
    </Link>
  );
}
