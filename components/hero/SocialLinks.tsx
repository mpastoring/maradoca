import { ImageIcon } from "lucide-react";
import Link from "next/link";
import SocialLink from "./SocialLink";

type SocialLinksProps = {
  links: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
};

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex space-x-4">
      {links.map((link) => (
        <SocialLink
          key={link.platform}
          href={link.url}
          icon={link.icon}
          label={link.platform}
          isImage={link.icon.startsWith("/")}
        />
      ))}
      <Link
        href="/media"
        className="transition-transform hover:scale-110"
        aria-label="Media Gallery"
      >
        <ImageIcon className="h-6 w-6" />
        <span className="sr-only">Media Gallery</span>
      </Link>
    </div>
  );
}
