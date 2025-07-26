import Educacion from "../components/Educacion";
import Trayectoria from "../components/Trayectoria";
import Proyecto from "../components/Proyecto";
import foto from "../assets/foto.jpg";
import { proyectos, proyectosEscolares } from "../data/proyectos";
import { habilidadesTecnicas } from "../data/habilidades";
import { useState, useEffect, useRef } from "react";
import { infoPersonal } from "../data/infoPersonal";
import { FaChevronDown } from "react-icons/fa";

function SobreMí() {
  const [items, setItems] = useState([
    { id: 1, name: "trayectoria" },
    { id: 2, name: "educacion" },
  ]);
  const [draggingId, setDraggingId] = useState(null);
  const [dragOverId, setDragOverId] = useState(null);

  const handleDragOver = (event, id) => {
    event.preventDefault();
    setDragOverId(id);
    if (id === draggingId) return;
    const draggingIndex = items.findIndex((item) => item.id === draggingId);
    const targetIndex = items.findIndex((item) => item.id === id);

    const updated = [...items];
    const [dragged] = updated.splice(draggingIndex, 1);
    updated.splice(targetIndex, 0, dragged);
    setItems(updated);
  };
  const handleDragStart = (event, id) => {
    setDraggingId(id);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setDragOverId(null);
    setDraggingId(null);
  };

  return (
    <div className="min-w-full">
      {/* Colocar enlace a proyectos */}
      <div className="my-5 flex items-center justify-center">
        <a
          onClick={() =>
            document
              .getElementById("proyectos")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer text-blue-500 hover:underline"
        >
          Ver Proyectos
          <FaChevronDown className="m-auto animate-bounce" />
        </a>
      </div>
      <div className="relative flex items-center">
        <div className="inline-block min-w-1/3 rounded-r-full bg-gradient-to-r from-violet-600 to-blue-300 py-4 ps-15 pe-10 text-center text-white shadow-xl/30 shadow-violet-500">
          <h3 className="font-bold">Sobre Mí</h3>
        </div>
        {/* poner el z-index en -1 */}
        <img
          src={foto}
          alt="Foto de Manuel Gaona"
          // className="absolute top-0 right-5 max-w-16 rounded-full border-white shadow-lg sm:max-w-25 md:max-w-35 lg:max-w-45"
          className="absolute top-1/2 right-5 max-w-16 translate-y-[-50%] rounded-full border-white shadow-lg sm:max-w-25 md:max-w-35"
          style={{ zIndex: -1 }}
        />
      </div>
      {infoPersonal.presentacion && (
        <h2 className="mt-3 text-center text-2xl font-bold text-blue-400">
          {infoPersonal.presentacion}
        </h2>
      )}
      {infoPersonal.profesion && (
        <h1 className="text-primary text-center text-3xl font-bold">
          {infoPersonal.profesion}
        </h1>
      )}
      <div className="">
        <div className="mx-auto my-4 max-w-2xl px-4">
          {infoPersonal.frase && (
            <p className="text-center text-gray-700 dark:text-gray-300">
              {infoPersonal.frase}
            </p>
          )}
          {infoPersonal.descripcion && (
            <p className="text-center">{infoPersonal.descripcion}</p>
          )}
        </div>
        <div className="mx-auto my-4 max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.id}
                className={`py-4 transition-all duration-200 ${
                  dragOverId
                    ? "scale-90 cursor-grabbing opacity-100 ring-2 ring-blue-400"
                    : "cursor-grab hover:bg-neutral-300 dark:hover:bg-neutral-700"
                }`}
                draggable="true"
                onDragStart={(e) => handleDragStart(e, item.id)}
                onDragOver={(e) => handleDragOver(e, item.id)}
                onDrop={handleDrop}
                onDragEnd={handleDrop}
              >
                {item.name === "trayectoria" ? (
                  <Trayectoria classNameItem="hover:scale-102" />
                ) : (
                  <Educacion classNameItem="hover:scale-102" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [verTodasHT, setVerTodasHT] = useState(false);
  // const habilidadesTecnicasAleatorias = habilidadesTecnicas.sort(
  //   () => Math.random() - 0.5,
  // );
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollerRef.current;
    let scrollAmount = 0;
    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
        }
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto max-w-4xl p-4">
      {/* skills */}
      <div className="mb-2 flex items-baseline justify-between align-middle">
        <h2 className="text-3xl font-bold">Habilidades</h2>
        <button
          className="cursor-pointer rounded-lg bg-gray-900 p-2 text-white hover:bg-gray-700"
          onClick={() => setVerTodasHT(!verTodasHT)}
        >
          {verTodasHT ? "Ver menos" : "Ver todas"}
        </button>
      </div>
      {verTodasHT ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {habilidadesTecnicas.map((skill, index) => (
            <Habilidad key={index} icon={skill.icon} nombre={skill.nombre} />
          ))}
        </div>
      ) : (
        <div
          ref={scrollerRef}
          className="pointer-events-none flex gap-4 overflow-x-auto py-4 whitespace-nowrap"
        >
          {habilidadesTecnicas.map((skill, i) => (
            <Habilidad key={i} icon={skill.icon} nombre={skill.nombre} />
          ))}
        </div>
      )}
      {/* proyectos */}
      <div className="container mx-auto">
        <h2 className="mt-8 mb-4 text-center text-3xl font-bold">Proyectos</h2>
        <div className="grid grid-cols-1 place-items-center gap-4">
          {Object.entries(proyectos).map(([key, project]) => (
            <Proyecto
              className="hover:scale-102 hover:transform"
              key={key}
              project={project}
              id={key}
            />
          ))}
        </div>
        <h2 className="mt-8 mb-4 text-center text-3xl font-bold">
          Proyectos Escolares
        </h2>
        <div className="grid grid-cols-1 place-items-center gap-4">
          {Object.entries(proyectosEscolares).map(([key, project]) => (
            <Proyecto
              className="hover:scale-102 hover:transform"
              key={key}
              project={project}
              id={key}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Habilidad({ icon, nombre }) {
  return (
    <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 p-4 text-white shadow-xl/30 shadow-violet-500">
      {icon}
      <span className="ml-2">{nombre}</span>
    </div>
  );
}

function Home() {
  return (
    <div>
      <div className="flex min-h-dvh min-w-full items-center justify-center pt-15">
        <SobreMí className="" />
      </div>
      <div className="h-8 bg-gradient-to-b from-neutral-100 to-violet-600 transition-colors duration-700 dark:from-neutral-800 dark:to-violet-600" />

      <div
        id="proyectos"
        className="min-h-dvh bg-gradient-to-b from-violet-600 to-blue-300 pt-15"
      >
        <Projects />
      </div>
    </div>
  );
}

export default Home;
