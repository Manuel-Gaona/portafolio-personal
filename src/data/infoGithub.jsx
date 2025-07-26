export const infoGithub = {
  perfilGithub: "https://api.github.com/users/Manuel-Gaona",
  repositoriosUrl: "https://api.github.com/users/Manuel-Gaona/repos",
  notas: [
    {
      type: "info",
      contenido: (
        <>
          <p>
            Los repositorios mostrados aquí son solo repositorios públicos de
            GitHub y no representan todo mi conocimiento. Si deseas ver más
            proyectos, puedes visitar la{" "}
            <a href="/" className="text-black hover:underline dark:text-white">
              página principal
            </a>
            .
          </p>
        </>
      ),
    },
    {
      type: "info",
      contenido: (
        <>
          <p>
            Esta página utiliza la API de GitHub para obtener los repositorios
            públicos de mi cuenta. Si tienes problemas para ver los
            repositorios, puede ser debido a restricciones de la API o problemas
            de conexión.
          </p>
        </>
      ),
    },
  ],
};
