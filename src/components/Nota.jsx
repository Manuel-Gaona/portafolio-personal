function Nota({ children, type, className }) {
  let styles =
    "bg-gray-50 border-gray-300 text-gray-800 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600";
  if (type === "info") {
    styles =
      "bg-blue-50 border-blue-300 text-blue-800 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800";
  }
  if (type === "warning") {
    styles =
      "bg-yellow-50 border-yellow-300 text-yellow-800 dark:bg-yellow-800/50 dark:text-yellow-300 dark:border-yellow-800";
  }
  if (type === "error") {
    styles =
      "bg-red-50 border-red-300 text-red-800 dark:bg-gray-800 dark:text-red-400 dark:border-red-800";
  }
  return (
    <div
      className={`flex items-center rounded-lg border p-2 text-sm ${styles} ${className}`}
      role="alert"
    >
      <svg
        className="me-3 inline h-4 w-4 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div>{children}</div>
    </div>
  );
}

export default Nota;
