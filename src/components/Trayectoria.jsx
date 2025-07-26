import { laboral } from "../data/trayectoria";

function Trayectoria({ classNameItem }) {
  return (
    <div className={`flex min-h-full flex-col items-center`}>
      <h3 className="text-primary mb-2 text-2xl">Trayectoria</h3>
      <ul className="w-full">
        {laboral.map((item) => (
          <li
            key={item.id}
            // className="m-auto w-4/5 rounded-lg bg-neutral-200 p-4 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
            className={`m-auto w-4/5 rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 p-4 text-white shadow-xl/30 shadow-violet-500 ${classNameItem}`}
          >
            <h4 className="font-bold">{item.puesto}</h4>
            <p className="text-sm">{item.empresa}</p>
            <p className="text-xs">{item.fecha}</p>
            <ul className="mt-2 list-inside list-disc">
              {item.responsabilidades.map((resp, index) => (
                <li key={index} className="text-sm">
                  {resp}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trayectoria;
