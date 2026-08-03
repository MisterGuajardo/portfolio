import Link from "next/link";
import { Sakura } from "./Sakura";
import { SakuraTree } from "./SakuraTree";
import { Torii } from "./Torii";
import { site } from "@/lib/site";

const STATS = [
  { value: "3", label: "sistemas modernizados" },
  { value: "99%", label: "cobertura y documentación" },
  { value: "100%", label: "disponibilidad en incidentes" },
  { value: "2", label: "proyectos propios en desarrollo" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="paper-grid relative flex min-h-screen flex-col overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute bottom-[-16%] left-[4%] h-[50vh] w-[70vw] max-w-[560px] rounded-full bg-sakura-500/[0.07] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute right-[-10%] top-[-18%] h-[55vh] w-[60vw] rounded-full bg-seal-500/[0.06] blur-3xl"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[72vw] max-w-[380px] translate-x-[20%] opacity-60 lg:hidden"
      >
        <Torii uid="hero-m" />
      </div>

      <div className="relative z-10 grid min-h-screen w-full lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center px-6 pb-24 pt-32 sm:px-12 lg:px-16 xl:px-28">
          <p className="animate-fade-up font-mono text-sm tracking-[0.3em] text-seal-400">
            {"// "}
            {site.role} — {site.location}
          </p>

          <h1
            className="animate-fade-up mt-6 font-serif text-[2.8rem] leading-[1.05] text-paper sm:text-6xl xl:text-7xl"
            style={{ animationDelay: "0.08s" }}
          >
            Matias Guajardo
            <span className="block text-sakura-400">Palacios</span>
          </h1>

          <p
            className="animate-fade-up mt-8 max-w-2xl text-lg leading-relaxed text-paper-dim sm:text-xl"
            style={{ animationDelay: "0.16s" }}
          >
            Ayudo a empresas a{" "}
            <span className="text-paper">modernizar sus sistemas</span> y
            convertirlos en plataformas{" "}
            <span className="text-paper">
              rápidas, seguras y fáciles de usar
            </span>{" "}
            para tu equipo y tus clientes. Y sin tecnicismos:{" "}
            <span className="text-sakura-300">
              hablo de resultados, no de jerga.
            </span>
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.24s" }}
          >
            <Link
              href="#experiencia"
              className="rounded-full bg-seal-500 px-7 py-3 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-seal-400"
            >
              Conoce mi trayectoria
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-ink-600 px-7 py-3 text-sm font-semibold tracking-wide text-paper-dim transition-colors hover:border-sakura-400 hover:text-sakura-300"
            >
              Hablemos
            </a>
          </div>

          <dl
            className="animate-fade-up mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ink-700 pt-8 sm:grid-cols-4"
            style={{ animationDelay: "0.32s" }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-serif text-3xl text-sakura-300 xl:text-4xl">
                  {s.value}
                </dd>
                <p className="mt-1 text-xs leading-snug text-paper-mute">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden h-full lg:block">
          <span
            aria-hidden="true"
            className="absolute right-10 top-10 select-none font-serif text-[16rem] leading-none text-sakura-500/[0.06] xl:text-[20rem]"
          >
            道
          </span>
          <div className="absolute inset-0 flex items-center justify-center pb-12">
            <div className="animate-torii-drift w-[62%] max-w-[430px] drop-shadow-2xl">
              <Torii uid="hero-lg" />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 -left-12 w-[42%] max-w-[340px]"
            >
              <SakuraTree uid="tree-l" />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 bottom-0 w-[30%] max-w-[240px] opacity-70"
            >
              <SakuraTree uid="tree-r" />
            </div>
          </div>
        </div>
      </div>

      <Sakura count={9} />
      <div className="vignette absolute inset-0 z-20" />

      <a
        href="#experiencia"
        aria-label="Bajar a la trayectoria"
        className="absolute bottom-8 left-1/2 z-40 -translate-x-1/2 text-paper-mute transition-colors hover:text-sakura-300"
      >
        <span className="animate-scroll-hint block font-mono text-xs tracking-widest">
          SCROLL
        </span>
      </a>
    </section>
  );
}
