import { Seal } from "./Seal";
import { SocialLinks } from "./SocialLinks";
import { SakuraTree } from "./SakuraTree";
import { site } from "@/lib/site";

const WRAP =
  "mx-auto w-full max-w-[1700px] px-6 sm:px-10 lg:px-16 xl:px-24";

function SectionHeading({
  number,
  kicker,
  title,
  kanji,
}: {
  number: string;
  kicker: string;
  title: string;
  kanji?: string;
}) {
  return (
    <div className="relative mb-14 lg:mb-20">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm font-semibold text-seal-400">
          {number}
        </span>
        <span className="font-mono text-sm tracking-[0.3em] text-seal-400">
          {kicker}
        </span>
      </div>
      <h2 className="mt-4 font-serif text-4xl leading-tight text-paper sm:text-5xl xl:text-6xl">
        {title}
      </h2>
      <div className="mt-7 h-px w-full bg-gradient-to-r from-ink-600 via-ink-700/50 to-transparent" />
      {kanji && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-2 top-0 hidden select-none font-serif text-[9rem] leading-none text-sakura-500/[0.08] xl:block"
        >
          {kanji}
        </span>
      )}
    </div>
  );
}

const EXPERIENCE = [
  {
    role: "Desarrollador Full Stack",
    period: "Abril 2025 – Febrero 2026",
    company:
      "Universidad de Talca — Dirección General de Aseguramiento de la Calidad y Planificación",
    summary:
      "Modernicé el sistema que sostiene la calidad institucional de la Universidad de Talca: la plataforma que coordina acreditaciones e investigaciones académicas. Hoy es rápida, segura y clara para quienes la usan a diario.",
    bullets: [
      "Construí las nuevas aplicaciones web del sistema de Acreditación y Gestión de Investigaciones, conectadas con el banco de datos institucional mediante 70+ automatizaciones.",
      "Migré los datos históricos de ambas áreas sin perder ni un registro: la información de décadas quedó ordenada, integra y disponible para el equipo académico.",
      "Reemplacé código antiguo y frágil por plataformas modernas, completando 80% de la migración en Acreditación y 60% en Investigaciones.",
      "Detecté y corregí un problema de concurrencia que afectaba a usuarios que trabajaban sobre el mismo registro, desplegando soluciones fuera de horario para no interrumpir el trabajo.",
      "Traduje el avance técnico a lenguaje natural en reuniones quincenales con stakeholders académicos, manteniéndolos alineados y tomando decisiones junto a ellos.",
    ],
  },
  {
    role: "Proceso de Titulación",
    period: "Abril 2024 – Diciembre 2024",
    company:
      "Universidad de Talca — desarrollo y defensa del trabajo de título, Ingeniería en Informática Empresarial",
    summary:
      "Mi proyecto de título se convirtió en la base del sistema real de acreditación: definí la estrategia técnica, elegí las tecnologías adecuadas y levanté los primeros cimientos con metodología ágil.",
    bullets: [
      "Definí el enfoque técnico del proyecto de modernización, evaluando frameworks y versiones compatibles con el entorno existente.",
      "Inicié el desarrollo y la migración de las primeras tablas de datos, sentando las bases que continuaría en mi rol profesional posterior.",
    ],
  },
  {
    role: "Consultor TI Independiente",
    period: "Agosto 2023 – Enero 2024",
    company: "Titans Coaching",
    summary:
      "Para una academia internacional construí su plataforma de cursos online de punta a punta, y respondí a una semana de ataques manteniendo el negocio en línea sin detenerse.",
    bullets: [
      "Levanté una academia con cursos protegidos, pagos integrados y membresías para un cliente internacional.",
      "Monté la infraestructura en la nube con dominio propio y protección de seguridad y SSL.",
      "Coordiné la respuesta ante una semana de ataques DDoS sostenidos, manteniendo 100% de disponibilidad.",
      "Desarrollé una plataforma para gestionar coaches y clientes, con acceso seguro y analíticas de uso.",
    ],
  },
];

const SKILLS = [
  {
    group: "Backend",
    tagline: "El motor de tu producto: procesos, reglas de negocio y datos que trabajan para ti.",
    items: [
      "NestJS",
      "Fastify",
      "TypeScript",
      "Node.js",
      "Python",
      "Java",
      "REST APIs",
      "JWT",
      "BullMQ",
      "Socket.io",
    ],
  },
  {
    group: "Frontend",
    tagline: "Lo que tu equipo y tus clientes ven: claro, elegante y fácil de usar.",
    items: ["Angular", "TypeScript", "RxJS", "Tailwind CSS"],
  },
  {
    group: "Bases de Datos",
    tagline: "Tu información organizada, conectada y protegida.",
    items: [
      "PostgreSQL",
      "MSSQL",
      "Oracle DB",
      "PL/SQL",
      "Redis",
      "Firebase",
      "Firestore",
    ],
  },
  {
    group: "DevOps",
    tagline: "Publicar con confianza: actualizaciones sin sustos ni caídas.",
    items: [
      "Docker",
      "Nginx",
      "Git",
      "GitHub",
      "GitLab",
      "GitHub Actions",
      "CI/CD",
      "Grafana",
      "Prometheus",
    ],
  },
  {
    group: "Método",
    tagline: "Código ordenado, pruebas, documentación y trabajo en equipo.",
    items: [
      "FastAPI",
      "pandas",
      "Microservicios",
      "E2E Testing",
      "Scrum",
      "Clean Architecture",
      "Postman",
      "Documentación Técnica",
      "Desarrollo asistido por IA",
    ],
  },
];

const PROJECTS = [
  {
    title: "Skopos",
    subtitle: "Tu aliado para postular mejor a las ofertas que te encajan",
    period: "Mayo 2026 – presente",
    status: "EN DESARROLLO",
    statusTone: "seal",
    lead: "¿Y si buscar trabajo dejara de ser buscar y pasara a ser elegir?",
    description:
      "Skopos busca y almacena ofertas de empleo según los cargos a los que quieras postular, y las compara con tu experiencia real para decirte cuánto encajas. Por cada oferta obtienes un score de compatibilidad, tus ventajas y desventajas, consejos prácticos y el link directo para postular. Además incluye un generador de currículum adaptado a cada oferta, construido solo con tus datos reales: sin inventar experiencias ni mentir.",
    tags: ["NestJS", "BullMQ", "Redis", "Python", "Socket.io", "IA"],
  },
  {
    title: "Sistema de Gestión de Tickets",
    subtitle: "Proyecto personal con Angular y NestJS",
    period: "Abril 2026",
    status: "DESARROLLO PAUSADO",
    statusTone: "muted",
    lead: "Un sistema para ordenar la atención a clientes y no perder ningún caso.",
    description:
      "Proyecto para profundizar en bases de datos en la nube: modelado de datos, acceso seguro con Google, archivos y analíticas de uso. Un laboratorio personal para dominar herramientas en demanda.",
    tags: ["Angular", "NestJS", "Firebase", "Firestore", "Google Login", "Analytics"],
  },
];

const EDUCATION = [
  {
    title: "Ingeniero en Informática Empresarial",
    period: "Marzo 2020 – Enero 2025",
    place: "Universidad de Talca",
  },
  {
    title:
      "Licenciado en Ciencias de la Gestión y Tecnologías de la Información",
    period: "Marzo 2020 – Enero 2025",
    place: "Universidad de Talca",
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="relative py-28 lg:py-36">
      <div className={WRAP}>
        <SectionHeading
          number="01"
          kicker="sobre-mi"
          title="Un ingeniero que habla en simple"
          kanji="匠"
        />
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <div className="flex flex-col items-start">
            <Seal className="h-16 w-16" />
            <p className="mt-6 font-mono text-sm text-paper-mute">
              {site.shortName} — {site.location}
            </p>
            <p className="mt-1 font-mono text-sm text-sakura-400">
              {site.role}
            </p>
            <p className="mt-1 font-mono text-sm text-sakura-400">
              Disponible: {site.availableFor}
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-paper-dim">
            <p className="text-2xl leading-snug text-paper">
              Mi trabajo: hacer que sistemas que llevan años en uso —y que
              nadie se atreve a tocar— funcionen mejor.
            </p>
            <p>
              En la Universidad de Talca modernicé el sistema de Acreditación
              que sostiene los procesos de calidad de la institución: los datos
              pasaron de planillas y código antiguo a una plataforma web
              ordenada y segura con la que el equipo académico trabaja sin
              fricciones.
            </p>
            <p>
              No soy solo código. Me siento con las personas, entiendo sus
              procesos y traduzco la tecnología a lenguaje claro — por eso las
              reuniones con equipos no técnicos son tan importantes para mí
              como el código.
            </p>
            <p>
              Mi siguiente paso es la{" "}
              <span className="text-sakura-300">arquitectura de software</span>:
              diseñar la estructura sobre la que crecen productos que duran.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experiencia" className="relative bg-ink-900/60 py-28 lg:py-36">
      <div className={WRAP}>
        <SectionHeading
          number="02"
          kicker="trayectoria"
          title="Dónde he puesto las manos"
          kanji="歴"
        />
        <div className="divide-y divide-ink-800 border-y border-ink-800">
          {EXPERIENCE.map((job, i) => (
            <article
              key={job.role}
              className="grid gap-6 py-12 first:pt-12 last:pb-12 lg:grid-cols-[minmax(260px,0.8fr)_1.6fr] lg:gap-16"
            >
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="font-mono text-xs tracking-widest text-seal-400">
                  {String(i + 1).padStart(2, "0")} — {job.period}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-snug text-paper xl:text-3xl">
                  {job.role}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-mute">
                  {job.company}
                </p>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-paper">
                  {job.summary}
                </p>
                <ul className="mt-6 space-y-3">
                  {job.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="flex gap-3 leading-relaxed text-paper-dim"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-sakura-500/70"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="capacidades" className="relative py-28 lg:py-36">
      <div className={WRAP}>
        <SectionHeading
          number="03"
          kicker="capacidades"
          title="Lo que puedo hacer por tu proyecto"
          kanji="技"
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 md:grid-cols-2 xl:grid-cols-3">
          {SKILLS.map(({ group, tagline, items }) => (
            <div
              key={group}
              className="flex flex-col bg-ink-850 p-8 transition-colors hover:bg-ink-800"
            >
              <h3 className="font-serif text-xl text-paper">{group}</h3>
              <p className="mt-2 leading-relaxed text-paper-dim">{tagline}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-ink-700 px-3 py-1 text-xs text-paper-mute"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex items-center bg-ink-850 p-8">
            <p className="font-serif text-lg leading-relaxed text-sakura-300">
              La tecnología es solo la mitad. La otra mitad es escuchar tus
              procesos, documentar decisiones y explicar los avances en
              lenguaje simple.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="relative bg-ink-900/60 py-28 lg:py-36">
      <div className={WRAP}>
        <SectionHeading
          number="04"
          kicker="proyectos"
          title="Ideas propias en construcción"
          kanji="作"
        />
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-ink-700 bg-ink-850/50 p-8 transition-colors hover:border-sakura-400"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-serif text-2xl text-paper xl:text-3xl">
                  {project.title}
                </h3>
                <span
                  className={`rounded-full border px-3 py-1 font-mono text-xs tracking-widest ${
                    project.statusTone === "seal"
                      ? "border-seal-500/40 text-seal-400"
                      : "border-ink-600 text-paper-mute"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="mt-1.5 font-mono text-xs tracking-wide text-paper-mute">
                {project.subtitle} · {project.period}
              </p>
              <p className="mt-5 font-serif text-lg leading-snug text-sakura-300">
                {project.lead}
              </p>
              <p className="mt-4 flex-1 leading-relaxed text-paper-dim">
                {project.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-ink-800 px-3 py-1 font-mono text-xs text-sakura-400"
                  >
                    #{tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="educacion" className="relative py-28 lg:py-36">
      <div className={WRAP}>
        <SectionHeading
          number="05"
          kicker="educación"
          title="La base"
          kanji="学"
        />
        <div className="divide-y divide-ink-800 border-y border-ink-800">
          {EDUCATION.map((edu) => (
            <div
              key={edu.title}
              className="grid gap-3 py-8 sm:grid-cols-[220px_1fr] sm:gap-12"
            >
              <p className="font-mono text-xs tracking-widest text-seal-400">
                {edu.period}
              </p>
              <div>
                <h3 className="font-serif text-xl leading-snug text-paper sm:text-2xl">
                  {edu.title}
                </h3>
                <p className="mt-1 text-sm text-paper-mute">{edu.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-ink-900/60 py-28 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-20 hidden w-[420px] opacity-25 lg:block"
      >
        <SakuraTree uid="contact" />
      </div>
      <div className={WRAP}>
        <div className="relative grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              number="06"
              kicker="contacto"
              title="¿Trabajamos juntos?"
              kanji="手"
            />
            <p className="max-w-xl text-lg leading-relaxed text-paper-dim">
              Si tienes un sistema que duele, una idea que quieres lanzar o un
              equipo que necesita refuerzo, hablemos. Respondo con claridad y
              sin rodeos.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-6 lg:pb-4">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-seal-500 px-8 py-4 text-base font-semibold tracking-wide text-paper transition-colors hover:bg-seal-400"
            >
              Escríbeme a {site.email}
            </a>
            <SocialLinks />
            <p className="font-mono text-sm text-paper-mute">
              Disponible: {site.availableFor} — {site.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-800">
      <div
        className={`${WRAP} flex flex-col gap-8 py-12 lg:flex-row lg:items-center lg:justify-between`}
      >
        <div className="flex items-center gap-3">
          <Seal className="h-9 w-9" />
          <span className="font-serif text-lg text-paper">{site.name}</span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-paper-dim">
          {[
            { href: "#sobre-mi", label: "Sobre mí" },
            { href: "#experiencia", label: "Trayectoria" },
            { href: "#capacidades", label: "Capacidades" },
            { href: "#proyectos", label: "Proyectos" },
            { href: "#contacto", label: "Contacto" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-sakura-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-1 text-sm text-paper-mute">
          <p>© {year} — Hecho con Next.js, café y pétalos de sakura.</p>
          <a
            href="#inicio"
            className="font-mono text-xs transition-colors hover:text-sakura-300"
          >
            ↑ Volver arriba
          </a>
        </div>
      </div>
    </footer>
  );
}
