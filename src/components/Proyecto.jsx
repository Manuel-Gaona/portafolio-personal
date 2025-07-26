// Importar el icono de GitHub
import { useNavigate } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Nota from "./Nota";

function Proyecto({ project, id, className }) {
  const navigate = useNavigate();

  const navigateToProject = () => {
    navigate(`proyecto/${id}`);
  };

  return (
    <div
      onClick={navigateToProject}
      className={`flex w-xs cursor-pointer flex-col items-stretch rounded-lg border border-gray-200 bg-white shadow-sm hover:bg-gray-100 sm:w-md md:w-xl md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ${className}`}
    >
      {project.image && (
        <img
          className="h-60 w-full rounded-t-lg object-cover md:h-auto md:max-h-full md:w-2/5 md:rounded-none md:rounded-s-lg"
          src={project.image}
          alt=""
        />
      )}
      <div className="flex w-full flex-col justify-between p-5 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {project.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {project.subtitle}
        </p>
        <ul className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <li
              key={index}
              className="inline-block rounded bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
            >
              {tech}
            </li>
          ))}
        </ul>
        <a className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <span>Ver proyecto</span>
          <FiExternalLink className="ms-2" />
        </a>
      </div>
    </div>
  );
}
export default Proyecto;
