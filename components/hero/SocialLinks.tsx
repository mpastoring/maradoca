import { ImageIcon, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import SocialLink from "./SocialLink";

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <SocialLink
        href="https://www.instagram.com/maradoca"
        icon={Instagram}
        label="Instagram"
      />
      <SocialLink
        href="https://soundcloud.com/maradoca"
        icon="/soundcloud.svg"
        label="SoundCloud"
        isImage
      />
      <Link
        href="/media"
        className="transition-transform hover:scale-110"
        aria-label="Media Gallery"
      >
        <ImageIcon className="h-6 w-6" />
        <span className="sr-only">Media Gallery</span>
      </Link>
      <SocialLink
        href="mailto:maradoca.music@gmail.com"
        icon={Mail}
        label="Email"
      />
    </div>
  );
}
