import { escolar } from "../data/trayectoria";

function Educacion({ classNameItem }) {
  // { handleDragStart, handleDrop, draggedId }
  // const isDragging = draggedId === "educacion";
  // ${isDragging ? "scale-105 opacity-100" : "opacity-100"}
  return (
    <div className={`flex min-h-full flex-col items-center`}>
      <h3 className="text-primary mb-2 text-2xl">Educación</h3>
      <ul className="m-auto w-full">
        {escolar.map((item) => (
          <li
            key={item.id}
            // className="m-auto w-4/5 rounded-lg bg-neutral-200 p-4 shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700"
            className={`m-auto w-4/5 rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 p-4 text-white shadow-xl/30 shadow-violet-500 ${classNameItem}`}
          >
            <h4 className="font-bold">{item.escuela}</h4>
            <p className="text-sm">{item.area}</p>
            <p className="text-xs">{item.titulo}</p>
            <p className="text-xs">{item.fecha}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Educacion;
