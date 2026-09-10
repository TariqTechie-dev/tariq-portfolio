import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, name: "About", href: "#about" },
    { id: 2, name: "Skills", href: "#skills" },
    { id: 3, name: "Projects", href: "#projects" },
    { id: 4, name: "Certifications", href: "#certifications" },
    { id: 5, name: "Education", href: "#education" },
    { id: 6, name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900 text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold"
        >
          Tariq<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-cyan-400"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNav(!nav)}
          className="z-50 text-2xl md:hidden"
          aria-label="Toggle navigation menu"
        >
          {nav ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {nav && (
          <div className="absolute left-0 top-20 flex w-full flex-col items-center gap-8 bg-slate-900 py-10 md:hidden">
            {links.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setNav(false)}
                className="text-lg font-medium transition-colors duration-200 hover:text-cyan-400"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;