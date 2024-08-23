export default function Introduction() {
  return (
    <div className="bg-blue-50 dark:bg-blue-900 rounded-lg shadow-lg p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-full -mr-16 -mt-16 opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-100">
          About MARADOCA
        </h2>
        <p className="text-blue-800 dark:text-blue-200 mb-4">
          MARADOCA is a rising artist based in Leipzig, Germany, who has burst
          onto the scene with a fresh perspective. Mixing melodic, tropical, and
          cosmic elements in a progressive flow, she weaves stories of deep
          feelings, creating vibes that resonate straight from her soul.
        </p>
        <p className="text-blue-800 dark:text-blue-200 italic">
          &ldquo;I like NUBES. ☁️&rdquo; - MARADOCA
        </p>
      </div>
    </div>
  );
}
