import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Globe, Instagram, Music } from "lucide-react";

type SocialLinksProps = {
  links: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
};

const iconMap = {
  instagram: Instagram,
  soundcloud: Music,
  website: Globe,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex items-center justify-center gap-4"
    >
      {links.map((link) => {
        const Icon = iconMap[link.platform as keyof typeof iconMap];
        if (!Icon) return null;

        return (
          <motion.a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full sm:h-10 sm:w-10",
              "bg-white/10 text-white/80 backdrop-blur-sm",
              "transition-colors hover:bg-white/20 hover:text-white"
            )}
          >
            <Icon className="h-6 w-6 sm:h-5 sm:w-5" />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
