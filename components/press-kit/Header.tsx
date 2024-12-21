type PressKitHeaderProps = {
  title: string;
  subtitle: string;
  location: string;
};

export function PressKitHeader({
  title,
  subtitle,
  location,
}: PressKitHeaderProps) {
  return (
    <header className="mb-12 md:mb-20 text-center">
      <div className="inline-block mb-3 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/5 border border-white/10">
        <span className="text-xs md:text-sm font-medium text-gray-300">
          Press Kit
        </span>
      </div>
      <h1 className="brand-title mb-3 md:mb-4 text-white/90 hover:text-white transition-colors duration-300">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide">
        {subtitle}
      </p>
      <p className="text-base md:text-lg text-gray-400 font-light tracking-wide">
        {location}
      </p>
    </header>
  );
}
