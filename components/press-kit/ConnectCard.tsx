import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialLinks } from "@/types/press-kit";
import { GlobeIcon, InstagramIcon, MailIcon, MusicIcon } from "lucide-react";

type ConnectCardProps = {
  socialLinks: SocialLinks;
};

export function ConnectCard({ socialLinks }: ConnectCardProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-white/[0.05] rounded-2xl blur-xl" />
      <Card className="relative border-0 bg-white/[0.02] backdrop-blur-sm rounded-xl">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-white/90">
            Connect
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 md:space-y-4">
            <div>
              <a
                href={socialLinks.website}
                className="flex items-center text-gray-400 hover:text-white transition-colors group"
              >
                <GlobeIcon className="mr-3 h-5 w-5 group-hover:text-[#ff5500]" />
                <span className="font-light">maradoca.com</span>
              </a>
            </div>
            <div>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors group"
              >
                <InstagramIcon className="mr-3 h-5 w-5 group-hover:text-[#ff5500]" />
                <span className="font-light">@maradoca</span>
              </a>
            </div>
            <div>
              <a
                href={socialLinks.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors group"
              >
                <MusicIcon className="mr-3 h-5 w-5 group-hover:text-[#ff5500]" />
                <span className="font-light">soundcloud.com/maradoca</span>
              </a>
            </div>
            <div>
              <a
                href={`mailto:${socialLinks.email}`}
                className="flex items-center text-gray-400 hover:text-white transition-colors group"
              >
                <MailIcon className="mr-3 h-5 w-5 group-hover:text-[#ff5500]" />
                <span className="font-light">{socialLinks.email}</span>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
