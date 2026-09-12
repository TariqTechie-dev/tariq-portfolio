import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 px-4 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5">
        {/* Name */}
        <h2 className="text-2xl font-bold text-cyan-400">
          Tariq Hussain
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-5 text-sm text-gray-300">
          <a href="#home" className="transition hover:text-cyan-400">
            Home
          </a>

          <a href="#skills" className="transition hover:text-cyan-400">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>

          <a href="#education" className="transition hover:text-cyan-400">
            Education
          </a>

          <a
            href="#certifications"
            className="transition hover:text-cyan-400"
          >
            Certifications
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/TariqTechie-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-300 transition hover:text-cyan-400"
          >
            <GitHub />
          </a>

          <a
            href="https://www.linkedin.com/in/tariq-hussain-65bbb3288"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 transition hover:text-cyan-400"
          >
            <LinkedIn />
          </a>

          <a
            href="https://www.instagram.com/tariqdevo/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-gray-300 transition hover:text-cyan-400"
          >
            <Instagram />
          </a>

          <a
            href="#"
            onClick={(event) => event.preventDefault()}
            aria-label="Twitter"
            className="text-gray-300 transition hover:text-cyan-400"
          >
            <Twitter />
          </a>

          <a
            href="https://www.facebook.com/tariq.hussain.793515/"
            onClick={(event) => event.preventDefault()}
            aria-label="Facebook"
            className="text-gray-300 transition hover:text-cyan-400"
          >
            <Facebook />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500">
          © 2026 Tariq Hussain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;