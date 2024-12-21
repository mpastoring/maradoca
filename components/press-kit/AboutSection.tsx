import { Badge } from "@/components/ui/badge";

type AboutSectionProps = {
  description: string;
  genres: string[];
};

export function AboutSection({ description, genres }: AboutSectionProps) {
  return (
    <div className="relative p-4 md:p-6 rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent rounded-2xl" />
      <section className="relative space-y-6">
        <h2 className="text-2xl font-semibold text-white">About</h2>
        <p className="text-lg text-gray-300 leading-relaxed">{description}</p>
        <div className="pt-4">
          <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
            Signature Sounds
          </h3>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <Badge
                key={genre}
                variant="secondary"
                className="px-4 py-1.5 bg-white/[0.03] hover:bg-white/[0.06] text-gray-300 border-0"
              >
                {genre}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
