import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ImageIcon, NewspaperIcon } from "lucide-react";
import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

type ContentProps = {
  heroData: {
    title: string;
    subtitle: string;
    socialLinks?: Array<{
      platform: string;
      url: string;
      icon: string;
    }>;
  } | null;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function Content({ heroData }: ContentProps) {
  if (!heroData) return null;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={cn(
        "relative z-10 flex h-full flex-col items-center justify-center px-4 text-center",
        "sm:items-start sm:px-8 sm:text-left md:px-12 lg:px-16"
      )}
    >
      <motion.h1
        variants={item}
        className={cn(
          "font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl",
          "max-w-[15ch] leading-tight"
        )}
      >
        {heroData.title}
      </motion.h1>

      <motion.p
        variants={item}
        className={cn(
          "mt-4 max-w-[30ch] text-lg text-white/80 sm:text-xl md:text-2xl",
          "font-light leading-relaxed tracking-wide"
        )}
      >
        {heroData.subtitle}
      </motion.p>

      <motion.div
        variants={item}
        className="mt-12 flex flex-col items-center gap-6 sm:mt-8 sm:flex-row sm:gap-4"
      >
        {heroData.socialLinks && (
          <div className="flex items-center gap-4">
            <SocialLinks links={heroData.socialLinks} />
          </div>
        )}

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/press-kit"
              className={cn(
                "flex min-w-[140px] items-center justify-center gap-2 rounded-full px-6 py-2",
                "bg-white/10 text-white/80 backdrop-blur-sm",
                "transition-colors hover:bg-white/20 hover:text-white"
              )}
            >
              <NewspaperIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Press Kit</span>
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/media"
              className={cn(
                "flex min-w-[140px] items-center justify-center gap-2 rounded-full px-6 py-2",
                "bg-white/10 text-white/80 backdrop-blur-sm",
                "transition-colors hover:bg-white/20 hover:text-white"
              )}
            >
              <ImageIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Gallery</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
