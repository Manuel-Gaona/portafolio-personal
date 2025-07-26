import { useParams } from "react-router-dom";
import { proyectos, proyectosEscolares } from "../data/proyectos";
// import { useEffect } from "react";
import { FaGithub, FaChevronDown } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Nota from "../components/Nota";

function ProyectoDetalle() {
  const { id } = useParams();
  let projects = { ...proyectos, ...proyectosEscolares };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [id]);

  const proyecto = projects[id];
  if (!proyecto) {
    return (
      <div className="mt-20">
        <h1 className="text-center text-2xl font-bold">
          Proyecto no encontrado
        </h1>
        <p className="text-center text-gray-500">
          El proyecto que buscas no existe o ha sido eliminado.
        </p>
      </div>
    );
  }
  return (
    <div className="px-5">
      <div className={`max-w-4xl md:m-auto ${proyecto.image ? "h-dvh" : ""}`}>
        <div className="flex h-full min-h-0 flex-col justify-center gap-4 pt-20 pb-5">
          {proyecto.notas && proyecto.notas.length > 0 && (
            <>
              {proyecto.notas.map((nota, index) => (
                <Nota key={index} type={nota.type}>
                  {nota.message}
                </Nota>
              ))}
            </>
          )}
          <div className="text-center">
            {proyecto.title && (
              <h1 className="text-primary text-center text-3xl font-bold">
                {proyecto.title}
              </h1>
            )}
            {proyecto.subtitle && (
              <h2 className="text-center text-xl font-semibold text-blue-400">
                {proyecto.subtitle}
              </h2>
            )}

            {proyecto.rol && (
              <p className="text-lg font-semibold">{proyecto.rol}</p>
            )}
            {/* {proyecto.description && <p>{proyecto.description}</p>} */}
            {proyecto.technologies && proyecto.technologies.length > 0 && (
              <ul className="mt-2 flex justify-center gap-2">
                {proyecto.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="inline-block rounded bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {proyecto.image && (
            <div className="max-h-fit min-h-0 flex-grow">
              <img
                src={proyecto.image}
                alt={proyecto.title}
                className="m-auto max-h-full w-auto border-1 object-contain"
              />
            </div>
          )}
          {(proyecto.repositorio || proyecto.link) && (
            <div className="flex justify-center gap-2 max-[350px]:flex-col">
              {proyecto.repositorio && (
                <a
                  href={proyecto.repositorio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 self-center rounded-lg border border-blue-600 bg-blue-100 p-2 text-sm text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:bg-blue-900 dark:text-blue-400"
                >
                  Ver repositorio
                  <FaGithub />
                </a>
              )}
              {proyecto.link && (
                <a
                  href={proyecto.link}
                  target="_blank"
                  rel="noopener noreferrer "
                  className="inline-flex items-center gap-1 self-center rounded-lg border border-green-600 bg-green-100 p-2 text-sm text-green-600 hover:bg-green-600 hover:text-white dark:border-green-400 dark:bg-green-900 dark:text-green-400"
                >
                  Ver proyecto
                  <FiExternalLink />
                </a>
              )}
            </div>
          )}
          {proyecto.contenidoExtra && proyecto.image && (
            <div className="mt-5 text-center">
              {/* Mostrar mensaje de leer mas con flecha hacia abajo */}
              <a className="cursor-default text-gray-500">
                Desplázate hacia abajo para ver más detalles del proyecto.
                <FaChevronDown className="m-auto animate-bounce" />
              </a>
            </div>
          )}
        </div>
      </div>
      {proyecto.contenidoExtra && (
        <div className="mx-auto mb-10 max-w-4xl">
          <div>{proyecto.contenidoExtra}</div>
        </div>
      )}
    </div>
  );
}

export default ProyectoDetalle;
