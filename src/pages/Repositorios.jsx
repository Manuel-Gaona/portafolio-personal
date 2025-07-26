import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Nota from "../components/Nota";
import { infoGithub } from "../data/infoGithub";

function Repositorios() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(infoGithub.repositoriosUrl)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || "Error al obtener los repositorios");
        }
        return data;
      })
      .then((data) => setRepos(data))
      .catch((error) => {
        console.error("Error obteniendo repositorios:", error);
        if (error.message) {
          setError(error.message);
        } else {
          setError("Error al obtener los repositorios");
        }
      });
  }, []);

  return (
    <div className="container mx-auto mt-15 px-4 py-8">
      <h2 className="mb-6 text-3xl font-bold">
        Repositorios publicos de GitHub
      </h2>
      {infoGithub.notas && infoGithub.notas.length > 0 && (
        <>
          {infoGithub.notas.map((nota, index) => (
            <Nota key={index} type={nota.type} className="my-2">
              {nota.contenido}
            </Nota>
          ))}
        </>
      )}
      {error && (
        <Nota type="error">
          <p>{error}</p>
          <p>Por favor, intenta nuevamente más tarde.</p>
        </Nota>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
              {repo.name}
            </h3>
            {repo.description && (
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                {repo.description}
              </p>
            )}
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {/* Fecha: {repo.created_at || "No especificado"} */}
              {/* Usar fecha sin hora */}
              Fecha:{" "}
              {new Date(repo.created_at).toLocaleDateString("es-ES") ||
                "No especificado"}
            </div>
            <div className="mt-4 flex justify-center gap-2 max-[350px]:flex-col">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 self-center border border-blue-600 p-2 text-sm text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400"
              >
                Ver en GitHub
                <FaGithub />
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 self-center border border-green-600 p-2 text-sm text-green-600 hover:bg-green-600 hover:text-white dark:border-green-400 dark:text-green-400"
                >
                  Página del proyecto
                  <FiExternalLink />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Repositorios;
