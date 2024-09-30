export default function Header() {
  return (
    <header className="p-6 flex justify-between items-center bg-black/30 backdrop-blur-md">
      <h1 className="text-4xl font-bold tracking-wider">MARADOCA</h1>
      <nav>
        <ul className="flex space-x-6 text-lg">
          <li>
            <a
              href="#about"
              className="hover:text-purple-300 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#music"
              className="hover:text-purple-300 transition-colors"
            >
              Music
            </a>
          </li>
          <li>
            <a
              href="#events"
              className="hover:text-purple-300 transition-colors"
            >
              Events
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
