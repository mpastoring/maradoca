import { Instagram, Mail } from "lucide-react";
import SocialLink from "./SocialLink";

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
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
      <SocialLink
        href="mailto:maradoca.music@gmail.com"
        icon={Mail}
        label="Email"
      />
    </div>
  );
}
