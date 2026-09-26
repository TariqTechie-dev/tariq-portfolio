import {
    Facebook,
    GitHub,
    Instagram,
    LinkedIn,
} from "@mui/icons-material";


const Footer = () => {

    return (
        <footer className="relative w-full overflow-hidden bg-slate-950 transition-colors duration-300" >
            <div
                className="h-12 bg-gradient-to-r from-slate-950 via-cyan-400 to-slate-950"
                aria-hidden="true"
                style={{ clipPath: "polygon(0 52%, 30% 0, 100% 52%, 100% 100%, 0 100%)" }}
            />

            <div className="border-t border-slate-800 bg-slate-950 px-4 pb-8 pt-7 sm:pb-9 sm:pt-8">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6">
                    <a
                        href="#home"
                        className="bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent transition-opacity hover:opacity-80"
                    >
                        Tariq Hussain
                    </a>

                    <nav
                        aria-label="Footer Navigation"
                        className="flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-400 sm:gap-x-7"
                    >
                        <a href="#home" className="transition hover:text-cyan-300">
                            Home
                        </a>
                        <a href="#skills" className="transition hover:text-cyan-300">
                            Skills
                        </a>
                        <a href="#projects" className="transition hover:text-cyan-300">
                            Projects
                        </a>
                        <a href="#certifications" className="transition hover:text-cyan-300">
                            Certifications
                        </a>
                        <a href="#education" className="transition hover:text-cyan-300">
                            Education
                        </a>
                        <a href="#contact" className="transition hover:text-cyan-300">
                            Contact
                        </a>
                    </nav>

                    <div className="flex items-center gap-4 text-slate-500 dark:text-slate-300">
                        <a
                            href="https://github.com/TariqTechie-dev"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="transition hover:-translate-y-0.5 hover:text-cyan-300"
                        >
                            <GitHub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/tariq-hussain-65bbb3288"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="transition hover:-translate-y-0.5 hover:text-cyan-300"
                        >
                            <LinkedIn />
                        </a>

                        <a
                            href="https://www.instagram.com/tariqdevo/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            className="transition hover:-translate-y-0.5 hover:text-cyan-300"
                        >
                            <Instagram />
                        </a>

                        <a
                            href="https://www.facebook.com/tariq.hussain.793515/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                            className="transition hover:-translate-y-0.5 hover:text-cyan-300"
                        >
                            <Facebook />
                        </a>
                    </div>

                    <p className="text-center text-xs text-slate-500 dark:text-slate-500 sm:text-sm">
                        © {new Date().getFullYear()} Tariq Hussain. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
