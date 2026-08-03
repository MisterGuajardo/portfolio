import { Seal } from "./Seal";
import { site } from "@/lib/site";

const NAV = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Trayectoria" },
  { href: "#capacidades", label: "Capacidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-800/80 bg-ink-950/70 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-[1700px] items-center justify-between px-6 py-3.5 sm:px-10 lg:px-16 xl:px-24">
        <a href="#inicio" className="group flex items-center gap-3">
          <Seal className="h-9 w-9 transition-transform group-hover:scale-105" />
          <span className="hidden font-serif text-lg tracking-wide text-paper sm:block">
            {site.shortName}
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-paper-dim md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-sakura-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-seal-500 px-4 py-1.5 text-sm font-medium text-paper transition-colors hover:bg-seal-400"
          >
            Descargar CV
          </a>
        </div>
      </nav>
    </header>
  );
}
