import { Headphones } from "lucide-react";

export default function MusicSection() {
  return (
    <section id="music" className="mb-20">
      <h3 className="text-3xl font-semibold mb-6 text-center">
        Sonic Palette
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <Headphones className="w-12 h-12 mb-4 text-purple-300" />
          <h4 className="text-xl font-semibold mb-2">Genres</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Melodic Techno</li>
            <li>Progressive House</li>
            <li>Deep House</li>
            <li>Afro House</li>
            <li>Organic House</li>
          </ul>
        </div>
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h4 className="text-xl font-semibold mb-2">Signature Sounds</h4>
          <ul className="space-y-2">
            <li>Ethereal synth pads</li>
            <li>Pulsating basslines</li>
            <li>Tribal percussion elements</li>
            <li>Cosmic atmospheric textures</li>
            <li>Emotive melodic progressions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}