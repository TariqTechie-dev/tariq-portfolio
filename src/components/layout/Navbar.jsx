import { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaAward,
  FaGraduationCap,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const NAV_LINKS = [
  { id: "about", name: "About", href: "#about", icon: <FaUser /> },
  { id: "skills", name: "Skills", href: "#skills", icon: <FaCode /> },
  { id: "projects", name: "Projects", href: "#projects", icon: <FaFolderOpen /> },
  { id: "certifications", name: "Certifications", href: "#certifications", icon: <FaAward /> },
  { id: "education", name: "Education", href: "#education", icon: <FaGraduationCap /> },
  { id: "contact", name: "Contact", href: "#contact", icon: <FaEnvelope /> },
];

// Reads any saved choice first; otherwise falls back to the visitor's OS preference.
const getInitialTheme = () => {
  if (typeof window === "undefined") return true; // default dark on server render
  const saved = window.localStorage.getItem("theme");
  if (saved) return saved === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const ThemeToggleButton = ({
  isDark,
  toggleTheme,
  focusRing,
  className = "",
}) => (
  <button
    onClick={toggleTheme}
    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    aria-pressed={isDark}
    className={`flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-lg text-cyan-400 transition-colors hover:bg-slate-800 ${focusRing} ${className}`}
  >
    {isDark ? <FaSun /> : <FaMoon />}
  </button>
);

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(getInitialTheme);
  const menuButtonRef = useRef(null);
  const closeMenuRef = useRef(null);
  const menuRef = useRef(null);
  const hasOpenedMenu = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflowY = nav ? "hidden" : "auto";
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, [nav]);

  useEffect(() => {
    if (!nav) {
      if (hasOpenedMenu.current) menuButtonRef.current?.focus();
      return undefined;
    }

    hasOpenedMenu.current = true;
    closeMenuRef.current?.focus();

    const handleMenuKeyDown = (event) => {
      if (event.key === "Escape") {
        setNav(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = menuRef.current?.querySelectorAll(
        'button:not([disabled]), a[href]'
      );

      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleMenuKeyDown);
    return () => document.removeEventListener("keydown", handleMenuKeyDown);
  }, [nav]);

  // Applies/removes the "dark" class on <html> and remembers the choice.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setNav(false);

    const targetElement = document.querySelector(href);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => setIsDark((prev) => !prev);

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 shadow-lg shadow-black/30 backdrop-blur-md"
          : "bg-slate-950"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"
        aria-label="Main Navigation"
      >
        {/* Logo Section */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className={`group flex items-center gap-2 rounded-md ${focusRing}`}
          aria-label="Tariq Hussain - Home"
        >
          <img
            src="/logo2.png"
            alt="Tariq Hussain Logo"
            className="h-12 w-auto object-contain brightness-0 transition-[filter,transform] duration-300 group-hover:scale-105 dark:brightness-100 md:h-14"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 md:flex lg:gap-10">
          {/* Theme toggle placed before the first nav link, as requested */}
          <li>
            <ThemeToggleButton
              isDark={isDark}
              toggleTheme={toggleTheme}
              focusRing={focusRing}
            />
          </li>
          {NAV_LINKS.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`group relative rounded-md py-2 text-base font-medium text-slate-950 transition-colors duration-200 hover:text-cyan-400 dark:text-slate-400 lg:text-lg ${focusRing}`}
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-cyan-400 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile: hamburger only (theme toggle lives inside the drawer) */}
        <button
          ref={menuButtonRef}
          onClick={() => setNav((prev) => !prev)}
          aria-label={nav ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={nav}
          aria-controls="mobile-menu"
          className={`flex h-11 w-11 items-center justify-center rounded-lg text-2xl text-slate-600 transition-colors hover:text-slate-900 dark:text-[#a9c2c5] dark:hover:text-[#f3fafa] md:hidden ${focusRing}`}
        >
          {nav ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Overlay */}
      {nav && (
        <div
          className="fixed inset-0 z-40 bg-black/60 transition-opacity md:hidden"
          onClick={() => setNav(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!nav}
        inert={!nav}
        className={`fixed top-0 right-0 bottom-0 z-50 flex h-screen w-[min(290px,calc(100vw-24px))] touch-pan-y select-none flex-col border-l border-slate-200 bg-white text-slate-900 shadow-2xl shadow-black/20 transition-transform duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:shadow-black/40 md:hidden ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top row: close button + theme toggle, side by side */}
        <div className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-700/40">
          <button
            ref={closeMenuRef}
            onClick={() => setNav(false)}
            aria-label="Close menu"
            className={`flex h-11 w-11 items-center justify-center rounded-md text-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white ${focusRing}`}
          >
            <FaTimes />
          </button>

          <ThemeToggleButton
            isDark={isDark}
            toggleTheme={toggleTheme}
            focusRing={focusRing}
          />
        </div>

        {/* Profile/User Card Info Section */}
        <div className="border-b border-slate-200 px-4 py-6 dark:border-slate-700/30">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-center shadow-lg shadow-black/20">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-cyan-400/70 bg-slate-950 p-1 shadow-lg shadow-cyan-400/10">
              <img
                src="/logo2.png"
                alt="Tariq Hussain"
                className="h-full w-full rounded-full object-contain"
              />
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Tariq Hussain
            </h3>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Computer Science Student
            </p>

            <div className="mx-auto mt-3 h-px w-12 bg-cyan-300" />

            <p className="mt-3 text-xs font-medium text-cyan-400">
              Full Stack Web Developer
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-2">
          {NAV_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`group relative flex items-center justify-between px-6 py-4 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white ${focusRing}`}
            >
              <div className="flex items-center gap-4">
                <span className="rounded-lg bg-slate-100 p-1.5 text-lg text-cyan-400 transition-colors group-hover:text-cyan-300 dark:bg-slate-900">
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.name}</span>
              </div>

              <span className="text-xs opacity-30 transition-all group-hover:translate-x-1 group-hover:text-cyan-300 group-hover:opacity-100">
                ➔
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 p-4 text-center font-mono text-[10px] tracking-wider text-slate-400 dark:border-slate-700/40 dark:text-slate-500">
          <p>© {new Date().getFullYear()} TARIQ HUSSAIN</p>
          <p className="mt-0.5 text-cyan-400/70">
            Software Engineer Portfolio
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
