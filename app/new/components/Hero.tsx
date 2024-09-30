import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="text-center mb-20">
      <div className="relative w-64 h-64 mx-auto mb-8">
        <Image
          src="/placeholder.svg?height=300&width=300"
          alt="Maradoca DJ"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent opacity-50 rounded-full"></div>
      </div>
      <h2 className="text-6xl font-bold mb-4 tracking-tight">
        Mandy Rauschner
      </h2>
      <p className="text-3xl text-purple-300 mb-8">
        DJ | Producer | Wellness Enthusiast
      </p>
      <p className="text-xl max-w-2xl mx-auto">
        Crafting cosmic journeys through melodic techno and progressive
        house. Let the music be your guide to freedom and self-discovery.
      </p>
    </section>
  );
}