
import type { ReactNode } from "react";

const images = {
  portada:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Female_Russian_honour_guard.jpg",
  historia:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Military_parade_on_Red_Square_2016-05-09_014.jpg",
  institucion:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Russian_honour_guard_in_Alexander_Garden.jpg",
  fuerzaAerea:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Russian_Army_Air_Force_honor_guard_uniform.png",
  actividades:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Russian_Federation_Army_Officer_Special_Ceremonial_Uniform.png",
  mando:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Russian_Federation_Army_Enlisted_Ceremonial_Uniform.png",
  actualidad:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Russian_Federation_Army_Officer_Parade_Uniform.png",
};

const navigation = [
  ["Inicio", "#inicio"],
  ["Historia", "#historia"],
  ["Institución", "#institucion"],
  ["Divisiones", "#divisiones"],
  ["Alto Mando", "#mando"],
  ["Actualidad", "#actualidad"],
];

const timeline = [
  {
    date: "14 DE DICIEMBRE DE 2019",
    title: "Fundación de F.A.R.",
    description:
      "Los orígenes de nuestra comunidad se remontan a la creación de F.A.R., el proyecto que dio comienzo a esta trayectoria.",
  },
  {
    date: "ETAPA POSTERIOR",
    title: "Una etapa de separación",
    description:
      "Con el paso del tiempo surgieron diferencias y una separación entre comunidades. Una parte continuó su propio camino bajo la denominación SRS Unión Soviética.",
  },
  {
    date: "ETAPA RANGERS",
    title: "Una nueva etapa",
    description:
      "La comunidad atravesó un periodo de reorganización e intentó continuar bajo la identidad Rangers.",
  },
  {
    date: "DECISIÓN COLECTIVA",
    title: "El regreso a la identidad rusa",
    description:
      "Tras una votación entre los miembros, se decidió recuperar la identidad rusa. Esta decisión marcó el camino hacia la actual FARF.",
  },
  {
    date: "ACTUALIDAD",
    title: "FARF",
    description:
      "La comunidad continúa desarrollándose como un proyecto de simulación y organización dentro de sus plataformas de juego.",
  },
];

const values = [
  {
    number: "01",
    title: "Disciplina",
    description:
      "Mantener una conducta responsable y respetar la organización de la comunidad.",
  },
  {
    number: "02",
    title: "Compromiso",
    description:
      "Participar activamente y contribuir al desarrollo de FARF.",
  },
  {
    number: "03",
    title: "Respeto",
    description:
      "Tratar correctamente a los integrantes, independientemente de su posición.",
  },
  {
    number: "04",
    title: "Organización",
    description:
      "Trabajar con coordinación y mantener una estructura clara.",
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-red-500">
      <span className="h-[2px] w-8 bg-red-600" />
      {children}
    </div>
  );
}

function PhotoPanel({
  image,
  title,
  subtitle,
  position = "center",
}: {
  image: string;
  title: string;
  subtitle: string;
  position?: string;
}) {
  return (
    <div
      className="group relative min-h-[300px] overflow-hidden border border-white/10 bg-cover bg-center"
      style={{
        backgroundImage: `url("${image}")`,
        backgroundPosition: position,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/5 transition duration-500 group-hover:from-black/90" />
      <div className="absolute bottom-0 left-0 p-7">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-red-400">
          FARF · Federación Rusa
        </p>
        <h3 className="text-2xl font-black uppercase text-white">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-7 text-gray-300">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090a0d] text-white">
      <div className="flex h-1.5 w-full">
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-blue-600" />
        <div className="w-1/3 bg-red-600" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090a0d]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center border border-red-700 bg-red-950/30 text-sm font-black">
              F
            </div>
            <div>
              <p className="text-sm font-black tracking-[0.22em]">FARF</p>
              <p className="text-[9px] uppercase tracking-[0.15em] text-gray-500">
                Fuerzas Armadas de la Federación Rusa
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="text-[10px] font-bold uppercase tracking-wider text-gray-400 transition hover:text-white"
              >
                {name}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="border border-red-700 px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition hover:bg-red-700"
          >
            Comunidad
          </a>
        </div>
      </header>

      <section
        id="inicio"
        className="relative flex min-h-[720px] items-center bg-cover bg-center"
        style={{ backgroundImage: `url("${images.portada}")` }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/20" />
        <div className="absolute bottom-0 left-0 h-1 w-44 bg-red-700" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-28">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-8 w-12 flex-col overflow-hidden shadow-lg">
                <div className="h-1/3 bg-white" />
                <div className="h-1/3 bg-blue-600" />
                <div className="h-1/3 bg-red-600" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-200">
                Federación Rusa · Portal institucional
              </p>
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-red-500">
              Российская Федерация
            </p>

            <h1 className="text-6xl font-black uppercase leading-[0.95] tracking-tight sm:text-8xl">
              FUERZAS
              <br />
              ARMADAS
              <br />
              <span className="text-red-600">FARF</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-gray-200">
              Una comunidad de simulación inspirada en la identidad,
              organización y tradición institucional de la Federación Rusa.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#institucion"
                className="bg-red-700 px-7 py-4 text-xs font-bold uppercase tracking-widest transition hover:bg-red-800"
              >
                Conocer FARF
              </a>
              <a
                href="#historia"
                className="border border-white/40 px-7 py-4 text-xs font-bold uppercase tracking-widest transition hover:bg-white hover:text-black"
              >
                Nuestra historia
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0d0f13] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <SectionLabel>Presentación institucional</SectionLabel>
            <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
              Una comunidad.
              <br />
              Una identidad.
              <br />
              <span className="text-red-600">Una historia.</span>
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-8 text-gray-400">
              FARF, Fuerzas Armadas de la Federación Rusa, es una comunidad
              dedicada a la simulación militar y al desarrollo de actividades
              organizadas dentro de plataformas de videojuegos.
            </p>
          </div>

          <PhotoPanel
            image={images.institucion}
            title="Tradición y representación"
            subtitle="Una imagen de la guardia de honor rusa en el Jardín de Alejandro, Moscú."
          />
        </div>
      </section>

      <section id="historia" className="bg-[#090a0d] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Trayectoria de la organización</SectionLabel>

          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <h2 className="text-4xl font-black uppercase sm:text-5xl">
              Nuestra
              <br />
              <span className="text-red-600">historia</span>
            </h2>
            <p className="max-w-xl text-sm leading-8 text-gray-400">
              El recorrido de FARF está marcado por diferentes etapas,
              cambios de identidad y decisiones colectivas que dieron forma
              a la comunidad actual.
            </p>
          </div>

          <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-center">
            <PhotoPanel
              image={images.historia}
              title="Memoria institucional"
              subtitle="Formación de cadetes durante un desfile militar en la Plaza Roja de Moscú."
            />

            <div className="relative ml-2 border-l border-red-900/70 pl-8">
              {timeline.map((item) => (
                <div key={item.title} className="relative pb-10 last:pb-0">
                  <div className="absolute -left-[38px] top-1 h-4 w-4 border-2 border-red-600 bg-[#090a0d]" />
                  <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-red-500">
                    {item.date}
                  </p>
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="institucion"
        className="border-y border-white/10 bg-[#0d0f13] py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Principios institucionales</SectionLabel>

          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-4xl font-black uppercase sm:text-5xl">
                Nuestra
                <br />
                <span className="text-red-600">institución</span>
              </h2>
              <p className="mt-7 text-sm leading-8 text-gray-400">
                Los siguientes principios son una propuesta de presentación
                institucional para expresar la orientación y los objetivos
                generales de la comunidad.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="border-t border-red-700 pt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red-500">
                    Misión
                  </p>
                  <p className="text-sm leading-7 text-gray-400">
                    Desarrollar una comunidad de simulación organizada,
                    promoviendo la participación y el trabajo colectivo.
                  </p>
                </div>

                <div className="border-t border-red-700 pt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red-500">
                    Visión
                  </p>
                  <p className="text-sm leading-7 text-gray-400">
                    Consolidar una comunidad reconocida por su organización,
                    continuidad y calidad en la simulación.
                  </p>
                </div>
              </div>
            </div>

            <PhotoPanel
              image={images.actividades}
              title="Identidad institucional"
              subtitle="Uniforme ceremonial de oficial de las Fuerzas Armadas de la Federación Rusa."
            />
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.number}
                className="border-t border-red-800/70 pt-6"
              >
                <p className="mb-5 text-xs font-bold text-red-500">
                  {value.number}
                </p>
                <h3 className="mb-3 text-lg font-bold uppercase">
                  {value.title}
                </h3>
                <p className="text-sm leading-7 text-gray-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="divisiones" className="bg-[#090a0d] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Estructura organizativa</SectionLabel>

          <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">
            <h2 className="text-4xl font-black uppercase sm:text-5xl">
              Divisiones
              <br />
              <span className="text-red-600">oficiales</span>
            </h2>
            <p className="text-sm leading-8 text-gray-400">
              Se muestran únicamente las divisiones confirmadas oficialmente
              dentro de la estructura actual de FARF.
            </p>
          </div>

          <div className="max-w-4xl">
            <PhotoPanel
              image={images.fuerzaAerea}
              title="Fuerza Aérea"
              subtitle="Uniforme de la guardia de honor de la Fuerza Aérea rusa. División oficial de la comunidad FARF."
            />
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border border-white/10 bg-[#111318] p-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
                  División confirmada
                </p>
                <h3 className="mt-2 text-xl font-bold">Fuerza Aérea</h3>
              </div>
              <span className="border border-red-800 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-red-400">
                Oficial
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d0f13] py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <SectionLabel>Comunidad y participación</SectionLabel>
            <h2 className="text-4xl font-black uppercase leading-tight">
              Actividades
              <br />
              <span className="text-red-600">de simulación</span>
            </h2>
            <p className="mt-7 text-sm leading-8 text-gray-400">
              FARF desarrolla actividades dentro de diferentes plataformas
              de videojuegos, con experiencias organizadas, encuentros
              comunitarios y eventos de simulación.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Eventos comunitarios",
                "Actividades de simulación",
                "Organización interna",
                "Participación de integrantes",
              ].map((activity, index) => (
                <div
                  key={activity}
                  className="flex items-center gap-5 border border-white/10 bg-[#111318] p-4"
                >
                  <span className="text-xs font-bold text-red-500">
                    0{index + 1}
                  </span>
                  <p className="text-sm font-bold uppercase tracking-wider">
                    {activity}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <PhotoPanel
            image={images.mando}
            title="Organización y disciplina"
            subtitle="Uniforme ceremonial de un integrante de las Fuerzas Armadas rusas."
          />
        </div>
      </section>

      <section id="mando" className="bg-[#090a0d] py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <PhotoPanel
            image={images.actualidad}
            title="Representación institucional"
            subtitle="Uniforme de desfile de oficial de las Fuerzas Armadas de la Federación Rusa."
          />

          <div>
            <SectionLabel>Estructura de dirección</SectionLabel>
            <h2 className="text-4xl font-black uppercase sm:text-5xl">
              Alto
              <br />
              <span className="text-red-600">Mando</span>
            </h2>
            <p className="mt-7 text-sm leading-8 text-gray-400">
              Este espacio estará destinado a presentar a los integrantes
              que conforman la dirección de FARF, sus cargos y sus
              responsabilidades dentro de la comunidad.
            </p>
            <p className="mt-6 border-l-2 border-red-700 pl-5 text-xs font-bold uppercase tracking-widest text-gray-500">
              Información pendiente de publicación oficial
            </p>
          </div>
        </div>
      </section>

      <section
        id="actualidad"
        className="border-y border-white/10 bg-[#0d0f13] py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Información institucional</SectionLabel>

          <h2 className="mb-12 text-4xl font-black uppercase">
            Actualidad y <span className="text-red-600">comunicados</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="border border-white/10 bg-[#111318] p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                Centro de información
              </p>
              <h3 className="mt-5 text-2xl font-bold">
                Comunicados oficiales
              </h3>
              <p className="mt-4 text-sm leading-8 text-gray-400">
                En este apartado se publicarán anuncios, novedades, decisiones
                organizativas y comunicados relevantes para los integrantes
                de FARF.
              </p>
              <p className="mt-7 text-[10px] font-bold uppercase tracking-widest text-gray-600">
                Próximamente
              </p>
            </div>

            <div
              className="min-h-[300px] border border-white/10 bg-cover bg-center"
              style={{ backgroundImage: `url("${images.historia}")` }}
            >
              <div className="flex min-h-[300px] items-end bg-gradient-to-t from-black/90 to-transparent p-7">
                <p className="text-sm font-bold uppercase tracking-widest">
                  Información y novedades de FARF
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="relative bg-[#111318] py-24">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-red-950/10" />

        <div className="relative mx-auto max-w-7xl px-6">
          <SectionLabel>Comunidad FARF</SectionLabel>

          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-black uppercase leading-tight sm:text-6xl">
                Forma parte de
                <br />
                <span className="text-red-600">nuestra comunidad.</span>
              </h2>
              <p className="mt-7 max-w-xl text-sm leading-8 text-gray-400">
                Conoce nuestras actividades, participa en la comunidad y
                mantente informado sobre el desarrollo de FARF.
              </p>
            </div>

            <div className="border border-white/10 p-6">
              <div className="mb-4 flex h-5 w-12 flex-col overflow-hidden">
                <div className="h-1/3 bg-white" />
                <div className="h-1/3 bg-blue-600" />
                <div className="h-1/3 bg-red-600" />
              </div>
              <p className="text-xl font-black tracking-[0.2em]">FARF</p>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-gray-500">
                Comunidad de simulación
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#07080a]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <p className="text-2xl font-black tracking-[0.25em]">FARF</p>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-gray-600">
                Fuerzas Armadas de la Federación Rusa
              </p>
            </div>

            <div className="max-w-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-red-500">
                Aviso institucional
              </p>
              <p className="mt-3 text-xs leading-6 text-gray-500">
                FARF es una comunidad independiente de simulación y
                videojuegos. No representa ni mantiene afiliación oficial
                con el Gobierno de la Federación Rusa ni con sus fuerzas
                armadas.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-[10px] uppercase tracking-widest text-gray-600">
            © 2026 FARF. Todos los derechos reservados.
          </div>

          <div className="mt-8 space-y-2 text-[10px] leading-6 text-gray-600">
            <p>
              Fotografías de desfiles y guardias de honor: consultar las
              páginas originales de Wikimedia Commons para sus autores y
              licencias.
            </p>
            <a
              href="https://commons.wikimedia.org/"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-gray-400 underline hover:text-white"
            >
              Wikimedia Commons
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

