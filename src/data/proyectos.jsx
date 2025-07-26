export const proyectos = {
  "yermo-access-api": {
    title: "Yermo Access API",
    subtitle: "Sistema de gestión escolar",
    description:
      "API REST desarrollada con autenticacion y autorizacion, para gestionar profesores, grupos y materias de una secundaria.",
    rol: "Desarrollador Backend",
    notas: [
      {
        message: "Repositorio y demo privados por motivos institucionales.",
        type: "info",
      },
      {
        message: (
          <>
            Este proyecto forma parte de un sistema más amplio que incluye una{" "}
            <a
              href="/proyecto/yermo-access-app"
              className="text-cyan-600 underline hover:text-cyan-600/50 dark:text-cyan-300 dark:hover:text-cyan-300/50"
            >
              aplicación híbrida desarrollada con Ionic
            </a>
          </>
        ),
        type: "info",
      },
    ],
    technologies: ["Laravel", "PHP", "MySQL"],
    contenidoExtra: (
      <>
        <h3 className="mb-4 text-xl font-semibold">Descripción del proyecto</h3>
        <div className="space-y-4 p-2 text-justify text-xl leading-relaxed">
          <p>
            Este proyecto fue desarrollado en el contexto de un sistema escolar
            real para la Secundaria Yermo y Parres como parte de mis estadías.
          </p>
          <p>
            Este proyecto fue hecho en colaboración con un equipo de 3
            estudiantes mas que también realizaron sus estadías en la misma
            institución. El objetivo principal fue crear un sistema de gestión
            escolar que permitiera facilitar a los administradores, profesores y
            personal administrativo sus tareas diarias.
          </p>
          <p>
            Las actividades que realicé durante el desarrollo de este proyecto
            fueron variadas y abarcaron desde decisiones técnicas iniciales
            hasta la implementación de módulos clave. En primer lugar, elegí
            trabajar con <strong>PHP</strong> debido a su amplia compatibilidad
            con servicios de hosting accesibles. Aunque no tenía experiencia
            previa con este lenguaje, opté por utilizar <strong>Laravel</strong>{" "}
            al ser el framework más popular en ese ecosistema y contar con
            abundante documentación.
          </p>
          <p>
            Me encargué de crear el proyecto y realizar las{" "}
            <strong>configuraciones generales</strong> necesarias para su
            funcionamiento, como la conexión con una base de datos{" "}
            <strong>MySQL</strong>, la definición de rutas API y otras
            configuraciones clave para el entorno de desarrollo.
          </p>
          <p>
            También diseñé la estructura y las{" "}
            <strong>relaciones generales de la base de datos</strong>, pensando
            en todas las entidades necesarias para el sistema completo.
            Posteriormente, implementé estas relaciones mediante{" "}
            <strong>migraciones en Laravel</strong>, incluyendo solo los campos
            específicos de los módulos que me correspondía desarrollar. Ademas
            se implementaron <code>SoftDeletes</code> para manejar la
            eliminación lógica de registros, para garantizar la integridad de
            los datos.
          </p>
          <p>
            Para la autenticación, decidí usar <strong>Laravel Sanctum</strong>,
            ya que el sistema sería consumido principalmente por una aplicación
            híbrida desarrollada en Ionic. Además, integré el paquete{" "}
            <strong>laravel-permission</strong> de Spatie para la gestión de{" "}
            <strong>roles y permisos</strong>, lo que permitió controlar el
            acceso a funcionalidades específicas.
          </p>
          <p>
            Generé los modelos necesarios para todo el proyecto, definiendo sus
            relaciones sin incluir campos específicos salvo en los módulos
            asignados a mí. También creé los <strong>controladores</strong> para
            manejar la lógica de los módulos que me correspondían.
          </p>
          <p>
            Posteriormente, subí el proyecto a un{" "}
            <strong>repositorio privado en GitHub</strong> para facilitar la
            colaboración. Aunque mi experiencia con Git era limitada, guié a mis
            compañeros en la instalación, clonación y configuración del entorno
            usando GitHub Desktop.
          </p>
          <p>
            En concreto, desarrollé el <strong>sistema de autenticación</strong>{" "}
            y los módulos de <strong>profesores</strong>,{" "}
            <strong>materias</strong>, <strong>grupos</strong> y las
            funcionalidades relacionadas con <strong>calificaciones</strong>.
            Este último módulo permite que los profesores califiquen a sus
            grupos y alumnos asignados; los padres pueden visualizar las
            calificaciones de sus hijos; y tanto el personal con los permisos
            necesarios como el administrador pueden consultar los resultados.
          </p>
          <p>
            El <strong>módulo de profesores</strong> es un CRUD completo para
            gestionar su información. En cuanto al{" "}
            <strong>módulo de materias</strong>, se implementó la creación de
            planes por grado, donde cada plan contiene un conjunto de materias.
            Para evitar inconsistencias, no se permite la edición o eliminación
            de planes ya generados.
          </p>
          <p>
            El <strong>módulo de grupos</strong> permite crear nuevos grupos
            asociados a un plan, registrar y remover alumnos, visualizar las
            materias correspondientes y asignar o cambiar profesores por
            materia. Estas operaciones requieren que los profesores y alumnos ya
            estén registrados previamente.
          </p>

          <p>
            También desarrollé las <strong>rutas API</strong> necesarias para
            cada módulo, así como las funcionalidades correspondientes.
          </p>
          <p>
            Para proteger los archivos confidenciales de los profesores (como
            cédulas o títulos), decidí almacenarlos en el servidor de forma
            privada. Implementé un sistema mediante rutas web protegidas que
            generan enlaces temporales con{" "}
            <strong>tokens de un solo uso</strong> y tiempo de expiración. Solo
            los usuarios autenticados y con permisos adecuados pueden generar
            estos tokens para acceder a los documentos.
          </p>
          <p>
            Finalmente, brindé <strong>apoyo a mis compañeros</strong> en sus
            respectivos módulos, resolviendo dudas y compartiendo mi enfoque de
            trabajo. Aunque no se asignó un líder formal dentro del equipo, en
            varias ocasiones tomé decisiones importantes que guiaron la
            estructura y lineamientos generales del proyecto.
          </p>
        </div>
      </>
    ),
  },
  "yermo-access-app": {
    image: "/img/projects/yermo-access-app.png",
    title: "Yermo Access App",
    subtitle: "Aplicación híbrida multiplataforma",
    description:
      "Aplicación móvil con sistema de autenticación y autorización, permite gestionar la información de profesores, grupos, materias y calificaciones.",
    rol: "Desarrollador Frontend",
    notas: [
      {
        message: "Repositorio y demo privados por motivos institucionales.",
        type: "info",
      },
    ],
    technologies: ["Ionic", "Angular", "TypeScript", "Capacitor", "SCSS"],
    contenidoExtra: (
      <>
        <h3 className="mb-4 text-xl font-semibold">Descripción del proyecto</h3>
        <div className="space-y-4 p-2 text-justify text-xl leading-relaxed">
          <p>
            Este proyecto fue desarrollado como parte de mis estadías en la
            Secundaria Yermo y Parres. La institución requería una aplicación
            que pudiera ser utilizada tanto en computadoras como en dispositivos
            móviles, lo que nos llevó a elegir
            <strong> Ionic</strong> como tecnología principal. Esta decisión
            respondió a su capacidad para construir aplicaciones{" "}
            <strong>multiplataforma</strong> desde una sola base de código.
          </p>
          <p>
            Una vez definido el stack tecnológico, me encargué de{" "}
            <strong>crear el proyecto</strong> e implementar las configuraciones
            iniciales necesarias: definición de variables de entorno para
            conexión a la API, instalación de librerías requeridas y
            estructuración general del proyecto.
          </p>
          <p>
            La estructura inicial se organizó cuidadosamente en carpetas para
            mantener una separación clara entre módulos, servicios y vistas.
            Esta organización facilitó el trabajo colaborativo y el escalamiento
            futuro del proyecto.
          </p>
          <img
            src="/img/yermo_access/estructura.png"
            alt="Estructura de carpetas del proyecto"
            className="mx-auto mb-4 max-w-11/12 rounded-lg border border-gray-300 shadow-md"
          />
          <p>
            Posteriormente, subí el proyecto a un{" "}
            <strong>repositorio privado en GitHub</strong> para facilitar la
            colaboración. Aunque mi experiencia con Git era limitada, guié a mis
            compañeros en la instalación, clonación y configuración del entorno
            usando GitHub Desktop.
          </p>
          <p>
            El diseño general se pensó{" "}
            <strong>para dispositivos móviles</strong>, utilizando componentes
            nativos de Ionic y respetando la paleta de colores institucional. En
            etapas tempranas desarrollé una <strong>maqueta básica</strong> en{" "}
            <strong>Figma</strong> para definir la distribución visual de los
            módulos.
          </p>
          <p>
            Mi responsabilidad principal fue el desarrollo de los módulos en los
            diferentes portales de la aplicación:{" "}
            <strong> autenticación</strong>, <strong>profesores</strong>,{" "}
            <strong>materias</strong>,<strong>grupos</strong> y{" "}
            <strong>calificaciones</strong>.
          </p>
          <p>
            El <strong>inicio de sesión</strong> se diseñó con validaciones de
            Angular y un diseño adaptado a la identidad institucional.
          </p>
          <img
            src="/img/projects/yermo-access-app.png"
            alt="Vista de login con diseño institucional"
            className="mx-auto mb-4 max-w-11/12 rounded-lg border border-gray-300 shadow-md"
          />
          {/* titulo en negritas */}
          <h3 className="text-2xl font-bold">Portal Administrativo</h3>
          <p>
            El <strong>módulo de profesores</strong> consiste en un CRUD
            completo: incluye una barra de búsqueda, listado de profesores,
            botones para editar o eliminar y un modal para registrar nuevos.
          </p>
          <img
            src="/img/yermo_access/profesores.png"
            alt="Listado de profesores"
            className="mx-auto mb-4 max-w-11/12 rounded-lg border border-gray-300 shadow-md"
          />
          <p>
            Para el <strong>módulo de materias</strong>, implementé una vista
            con tarjetas que representan planes por grado. Al seleccionar uno,
            se muestran las materias asociadas, junto con la opción de agregar
            nuevas.
          </p>
          <img
            src="/img/yermo_access/plan-materias.png"
            alt="Listado de planes y materias"
            className="mx-auto mb-4 max-w-11/12 rounded-lg border border-gray-300 shadow-md"
          />
          <img
            src="/img/yermo_access/materias.png"
            alt="Listado de materias"
            className="mx-auto mb-4 max-w-11/12 rounded-lg border border-gray-300 shadow-md"
          />
          <p>
            En el <strong>módulo de grupos</strong>, se despliegan tarjetas con
            grupos disponibles, con formularios para crear nuevos. Al ingresar a
            un grupo, se muestran dos pestañas: "alumnos" y "materias".
          </p>
          <img
            src="/img/yermo_access/grupos.png"
            alt="Vista de grupos por tarjeta"
            className="mx-auto mb-4 max-w-11/12 rounded-lg border border-gray-300 shadow-md"
          />
          <p>
            En la pestaña de <strong>alumnos</strong>, se listan los alumnos del
            grupo y se permite agregar o remover. Para agregar nuevos alumnos se
            cuenta con una barra de búsqueda que despliega los alumnos
            disponibles para agregar a ese grupo y un botón para añadir.
          </p>
          <img
            src="/img/yermo_access/grupo-alumnos-agregar.png"
            alt="Gestión de alumnos y materias en grupo"
            className="mx-auto mb-4 max-w-11/12 rounded-lg border border-gray-300 shadow-md"
          />
          <p>
            En la pestaña de <strong>materias</strong>, se visualizan las
            materias asociadas, con un botón para asignar o cambiar el profesor,
            al dar clic se abre un modal para buscar y seleccionar de los
            profesores registrados. Además, cada materia tiene acceso a una
            vista detallada con el listado de alumnos y sus calificaciones.
          </p>
          <img
            src="/img/yermo_access/grupo-materias.png"
            alt="Asignación de profesores a materias"
            className="mx-auto mb-4 max-w-11/12 rounded-lg border border-gray-300 shadow-md"
          />
          <h3 className="text-2xl font-bold">Portal de Profesores</h3>
          <p>
            En el <strong>portal de profesores</strong>, desarrollé la sección
            de calificaciones. Los profesores ven sus grupos asignados y pueden
            ingresar calificaciones por periodo mediante un modal que lista a
            los alumnos.
          </p>
          <img
            src="/img/yermo_access/profesor/clases.png"
            alt="Vista de calificaciones para profesores"
            className="mx-auto mb-4 max-w-11/12 rounded-lg border border-gray-300 shadow-md"
          />
          <h3 className="text-2xl font-bold">Portal del Alumno/Padre</h3>
          <p>
            Finalmente, en el <strong>portal del alumno/padre</strong>,
            desarrollé una vista tipo acordeón donde se seleccionan los alumnos
            del padre, se listan los grupos del alumno seleccionado y al
            desplegar uno, se muestran las calificaciones obtenidas.
          </p>
          <img
            src="/img/yermo_access/padres/calificaciones.png"
            alt="Vista de calificaciones en el portal del alumno"
            className="mx-auto mb-4 max-w-11/12 rounded-lg border border-gray-300 shadow-md"
          />
          <p>
            Gracias a una buena organización del código, uso de componentes
            reutilizables y trabajo colaborativo con GitHub, pudimos lograr una
            aplicación funcional, visualmente agradable y fácil de usar tanto
            para profesores como para alumnos y personal administrativo.
          </p>
        </div>
      </>
    ),
  },
  portafolio: {
    image: "/img/projects/portafolio.png",
    title: "Portafolio Personal",
    subtitle: "Web interactiva de presentación",
    description:
      "Sitio web donde muestro mis proyectos, tecnologías que utilizo y un poco sobre mí como desarrollador.",
    rol: "Desarrollador Frontend",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    repositorio: "https://github.com/Manuel-Gaona/portafolio-personal",
    contenidoExtra: (
      <>
        <h3 className="mt-4 text-xl font-semibold">Descripción del proyecto</h3>
        <div className="space-y-4 p-2 text-justify text-lg leading-relaxed">
          <p>
            Este portafolio personal fue desarrollado con <strong>React</strong>{" "}
            y estilizado completamente con <strong>Tailwind CSS</strong>, sin
            utilizar frameworks adicionales. El objetivo principal fue crear un
            sitio moderno, adaptable y totalmente personalizable, donde pudiera
            mostrar mis proyectos, habilidades y trayectoria como desarrollador.
          </p>
          <p>
            La aplicación incluye <strong>modo claro y oscuro</strong>, y un{" "}
            <strong>navbar fijo</strong> en la parte superior disponible en
            todas las páginas para facilitar la navegación. También cuenta con
            una <strong>página de error 404</strong> personalizada.
          </p>
          <p>
            Todos los datos del sitio son cargados de forma{" "}
            <strong>
              dinámica desde la carpeta <code>/data</code>
            </strong>
            , lo que permite una personalización rápida y sencilla. Entre los
            archivos configurables se encuentran:
          </p>
          <ul className="ml-4 list-inside list-disc">
            <li>
              <code>infoPersonal.jsx</code>: Datos personales, frase de
              presentación y descripción.
            </li>
            <li>
              <code>trayectoria.js</code>: Información académica y experiencia
              profesional.
            </li>
            <li>
              <code>proyectos.jsx</code>: Lista de proyectos generales y
              escolares.
            </li>
            <li>
              <code>habilidades.jsx</code>: Habilidades técnicas con sus
              respectivos íconos.
            </li>
            <li>
              <code>linksNav.js</code>: Enlaces del menú de navegación (incluso
              externos).
            </li>
            <li>
              <code>infoGithub.jsx</code>: Información para la página de
              repositorios.
            </li>
          </ul>
          <p>
            La <strong>página principal</strong> está compuesta por varias
            secciones que se renderizan con componentes reutilizables:
          </p>
          <ul className="ml-4 list-inside list-disc">
            <li>
              <strong>Sobre mí</strong>: Muestra la presentación, trayectoria
              académica y profesional.
            </li>
            <li>
              <strong>Proyectos</strong>: Muestra las habilidades técnicas y
              divide los proyectos en dos categorías: proyectos y proyectos
              escolares.
            </li>
          </ul>
          <p>
            Cada proyecto listado incluye una vista previa y puede contener una
            descripción extendida mediante la propiedad{" "}
            <code>contenidoExtra</code>. Además, la lista en la página principal
            permite navegar a una vista detallada de cada uno.
          </p>
          <p>
            La <strong>página de repositorios</strong> está integrada con la{" "}
            <strong>API pública de GitHub</strong> y muestra automáticamente
            todos los repositorios públicos de mi cuenta. También es posible
            personalizar el usuario del que se obtienen los repositorios
            mediante el archivo <code>infoGithub.jsx</code>, y además se pueden
            incluir notas informativas para el usuario que se mostrarán en la
            página.
          </p>
          <p>
            Este proyecto fue realizado{" "}
            <strong>sin experiencia previa en React</strong>. A medida que
            avanzaba, aprendí los fundamentos de React, el manejo de props,
            estados y la composición de componentes.
          </p>
          <p>
            Gracias a su diseño modular, este portafolio puede ser utilizado
            fácilmente como una{" "}
            <strong>plantilla para otros desarrolladores</strong> especialmente
            aquellos con poca experiencia profesional, basta con modificar los
            archivos dentro de la carpeta <code>/data</code> para personalizar
            el contenido, sin necesidad de cambiar el código base del frontend.
            Sin embargo, con un poco de cambios en el código puede ser utilizado
            por cualquier persona que desee tener un portafolio personal.
          </p>
        </div>
      </>
    ),
  },
};

export const proyectosEscolares = {
  "chispitas-mentales": {
    image: "/img/projects/chispitas-mentales.png",
    title: "Chispitas Mentales",
    subtitle: "Sistema didáctico para educación motriz",
    description:
      "Plataforma educativa que combina juegos interactivos con dispositivos IoT para apoyar el aprendizaje en niños de primaria.",
    rol: "Desarrollador Fullstack",
    technologies: ["Ionic", "Angular", "TypeScript", "SCSS", "PHP", "MySQL"],
    repositorio: "",
    link: "",
    contenidoExtra: (
      <>
        <h3 className="mt-4 text-xl font-semibold">Detalles del proyecto</h3>
        <div className="m-2 space-y-2 text-justify leading-relaxed">
          <p>
            Este fue el último proyecto escolar antes de estadías, realizado en
            equipo de tres personas. El objetivo fue desarrollar una plataforma
            educativa híbrida (web y móvil) llamada{" "}
            <strong>Chispitas Mentales</strong>, que complementa un sistema
            didáctico basado en IoT para apoyar el aprendizaje motriz en niños
            de primaria mediante juegos interactivos.
          </p>
          <p>
            La aplicación fue desarrollada usando <strong>Ionic</strong> para
            lograr compatibilidad tanto en web como en dispositivos móviles. El
            backend fue implementado con <strong>PHP</strong>, utilizando{" "}
            <strong>MySQL</strong> como sistema de gestión de base de datos.
            Todo el diseño visual fue realizado con <strong>SCSS</strong> y
            componentes personalizados de Ionic.
          </p>
          <h3 className="mt-4 text-xl font-semibold">
            Responsabilidades y desarrollo
          </h3>
          <p>
            Mi rol fue como <strong>desarrollador fullstack</strong>, y me
            encargué completamente de las siguientes secciones:
          </p>
          <ul className="list-inside list-disc">
            <li>
              <strong>Página de inicio:</strong> incluye un carrusel de
              bienvenida y una presentación amigable de la aplicación.
            </li>
            <li>
              <strong>Página de inicio de sesión:</strong> validación y acceso
              según el tipo de usuario (administrador, profesor o alumno).
            </li>
            <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <img
                src="/img/projects/chispitas-mentales.png"
                alt="Página de inicio"
              />
              <img
                src="/img/chispitas_mentales/login.png"
                alt="Página de inicio de sesión"
              />
            </div>
            <p className="mt-2 text-center text-xs text-gray-500">
              *Las imágenes muestran algunas de las interfaces desarrolladas por
              mí en este proyecto.*
            </p>
            <li>
              <strong>Portal del administrador:</strong> incluye una vista
              principal con acceso a los módulos de <em>actividades</em>,{" "}
              <em>periodos</em> y <em>profesores</em>.
              <ul className="ml-6 list-inside list-disc">
                <li>
                  <strong>Actividades:</strong> permite activar o desactivar un
                  catálogo fijo de juegos disponibles en el dispositivo IoT.
                </li>
                <li>
                  <strong>Periodos:</strong> se pueden registrar nuevos periodos
                  con fecha de inicio y fin, y cambiar su estado (activo o
                  inactivo).
                </li>
                <li>
                  <strong>Profesores:</strong> muestra una lista completa de
                  profesores. Al seleccionar uno, se listan sus clases y luego
                  los alumnos de cada clase. También permite generar un PDF con
                  los datos de los estudiantes.
                </li>
              </ul>
              <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <img
                  src="/img/chispitas_mentales/admin/principal.png"
                  alt="Portal del administrador"
                />
                <img
                  src="/img/chispitas_mentales/admin/actividades.png"
                  alt="Listado de actividades"
                />
                <img
                  src="/img/chispitas_mentales/admin/periodos.png"
                  alt="Listado de periodos"
                />
                <img
                  src="/img/chispitas_mentales/admin/profesores.png"
                  alt="Listado de profesores"
                />
              </div>
              <p className="mt-2 text-center text-xs text-gray-500">
                *Las imágenes muestran algunas de las interfaces desarrolladas
                por mí en este proyecto.*
              </p>
            </li>
            <li>
              <strong>Portal del profesor:</strong> permite visualizar clases
              existentes, agregar nuevas clases con imagen, asignar actividades
              y alumnos, y registrar calificaciones.
              <ul className="ml-6 list-inside list-disc">
                <li>
                  Al seleccionar una clase, se puede elegir un periodo activo y
                  ver las actividades asignadas.
                </li>
                <li>
                  Cada actividad muestra a los alumnos con su calificación o un
                  ícono de “+” si no se ha evaluado.
                </li>
                <li>
                  Al hacer clic en el ícono, se redirige a una página para
                  vincular el dispositivo IoT y ejecutar el juego.
                </li>
              </ul>
            </li>
            <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <img
                src="/img/chispitas_mentales/clases.png"
                alt="Portal del profesor"
              />
              <img
                src="/img/chispitas_mentales/detalle-clase.png"
                alt="Detalle de clase"
              />
              <img
                src="/img/chispitas_mentales/agregar-actividad.png"
                alt="Agregar actividad"
              />
              <img
                src="/img/chispitas_mentales/alumnos.png"
                alt="Listado de alumnos"
              />
            </div>
            <p className="mt-2 text-center text-xs text-gray-500">
              *Las imágenes muestran algunas de las interfaces desarrolladas por
              mí en este proyecto.*
            </p>
          </ul>
          <h3 className="mt-4 text-xl font-semibold">
            Dispositivo IoT y juegos integrados
          </h3>
          <p>
            Aunque no desarrollé el dispositivo IoT ni el portal del alumno,
            participé en la integración de sus funcionalidades. El dispositivo
            se conecta a la aplicación cuando se inicia una actividad, y ejecuta
            uno de los siguientes juegos:
          </p>
          <ul className="list-inside list-disc">
            <li>
              <strong>Bopit:</strong> el dispositivo incluye un carro y una
              tortuga. Una bocina indica si debes "golpear" o "girar", y el niño
              responde con la acción correspondiente.
            </li>
            <li>
              <strong>Secuencia de colores:</strong> una pantalla táctil muestra
              cuatro colores; el alumno debe presionar el color indicado por
              voz, todo en un tiempo límite.
            </li>
            <li>
              <strong>Secuencia de figuras:</strong> similar al juego de
              colores, una pantalla táctil muestra cuatro figuras; el alumno
              debe presionar la figura indicada por voz, todo en un tiempo
              límite.
            </li>
          </ul>
          <p className="mt-2 text-justify">
            Al finalizar el juego, el sistema genera automáticamente una
            calificación y una descripción de apoyo con ayuda de inteligencia
            artificial. Esta descripción se guarda y puede consultarse
            posteriormente desde el portal de alumno.
          </p>

          <h3 className="mt-4 text-xl font-semibold">Aprendizajes obtenidos</h3>
          <p className="mt-2 text-justify">
            Este proyecto fue clave para fortalecer mis conocimientos sobre el
            desarrollo de <strong>aplicaciones híbridas</strong> con Ionic,
            estructuración de <strong>backend en PHP</strong> desde cero,{" "}
            <strong>modelado de bases de datos</strong> con relaciones y
            restricciones, y consumo de datos en tiempo real. También fue una
            gran oportunidad para mejorar mis habilidades de{" "}
            <strong>trabajo en equipo</strong>, colaboración técnica y solución
            de problemas en conjunto.
          </p>
        </div>
      </>
    ),
  },
  "lelegant-chat-noir": {
    image: "/img/projects/lelegant-chat-noir.png",
    title: "L’elegant Chat Noir",
    subtitle: "Sistema de gestión para tienda departamental",
    description:
      "Proyecto escolar basado en el modelo de SICEFA para administrar ventas, empleados, productos y sucursales.",
    rol: "Desarrollador del módulo de empleados",
    technologies: ["Java", "JavaFX", "HTML", "CSS", "JavaScript"],
    repositorio: "https://github.com/Manuel-Gaona/LelegantChatNoir",
    contenidoExtra: (
      <>
        <h3 className="mt-4 text-xl font-semibold">Detalles del proyecto</h3>
        <div className="m-2 space-y-2 text-justify leading-relaxed">
          <p className="text-justify">
            Este fue uno de los proyectos más completos y desafiantes del
            cuatrimestre, desarrollado como parte de un equipo de cuatro
            personas. "L’elegant Chat Noir" es un sistema de gestión para una
            tienda departamental inspirado en el modelo de SICEFA, con módulos
            que permiten administrar empleados, productos, ventas y sucursales.
            El sistema fue implementado tanto en versión web como de escritorio:
            la web fue desarrollada con <strong>HTML, CSS y Bootstrap</strong>,
            mientras que la versión de escritorio se creó con{" "}
            <strong>Java y JavaFX</strong>.
          </p>
          <p className="mt-2 text-justify">
            A diferencia de proyectos anteriores, aquí trabajamos por primera
            vez con <strong>bases de datos relacionales</strong> reales,
            utilizando <strong>MySQL</strong> para modelar y gestionar la
            información del sistema. Aprendí a diseñar y estructurar
            correctamente una base de datos desde cero, definiendo relaciones
            entre tablas, claves primarias y foráneas, y aplicando buenas
            prácticas en la normalización de datos. También realicé consultas
            complejas para obtener, insertar, actualizar o eliminar registros.
          </p>
          <p className="mt-2 text-justify">
            Además, fue el primer proyecto en el que implementamos servicios
            <strong>RESTful</strong> para la comunicación entre el frontend y el
            backend. Utilizamos Java con las librerías de{" "}
            <strong>Jakarta</strong> para construir las APIs que permitieran
            enviar y recibir información desde la base de datos. Aprendí
            conceptos fundamentales como el manejo de rutas, peticiones HTTP
            (GET, POST, PUT, DELETE), serialización de datos,{" "}
            <strong>MVC</strong> y manejo de errores.
          </p>
          <p className="mt-2 text-justify">
            En este proceso también reforcé conocimientos sobre la{" "}
            <strong>programación orientada a objetos</strong>, la separación de
            responsabilidades en capas (modelo, vista y controlador), y el uso
            de herramientas como Scene Builder para la interfaz en JavaFX.
          </p>
          <p className="mt-2 text-justify italic">
            *Nota: este sistema fue un proyecto escolar, por lo que puede
            contener áreas de mejora. Sin embargo, fue clave en mi formación
            como desarrollador y marcó mi primer acercamiento real al desarrollo
            de aplicaciones conectadas a bases de datos mediante servicios web.*
          </p>
        </div>
      </>
    ),
  },
  metvi: {
    image: "/img/projects/metvi.png",
    title: "METVI - SICEFA",
    subtitle: "Sistema de control de farmacias",
    description:
      "Sistema escolar de control para farmacias que permite administrar productos, empleados y ventas.",
    rol: "Desarrollador Frontend",
    technologies: ["HTML", "JavaScript", "CSS", "Bootstrap"],
    notas: [
      {
        message:
          'Para iniciar sesión puede usar el usuario y contraseña "Administrador" en central o "22040000" en sucursal.',
        type: "info",
      },
      {
        message:
          "No todo el proyecto fue desarrollado por mí, la descripción tiene la informacion de lo que desarrolle.",
        type: "info",
      },
    ],
    repositorio: "https://github.com/Manuel-Gaona/SICEFA-Integradora",
    link: "https://metvi.netlify.app",
    contenidoExtra: (
      <>
        <h3 className="mt-4 text-xl font-semibold">Detalles del Proyecto</h3>
        <p className="mt-2 text-justify leading-relaxed">
          SICEFA (Sistema Central de Farmacias) es un sistema para la gestion de
          METVI (Medicamos Tu Vida) una empresa ficticia y fue uno de los
          primeros proyectos colaborativos donde aplicamos HTML, CSS, JavaScript
          y Bootstrap de forma más estructurada. Se desarrolló una interfaz
          responsiva con un sistema de login que distingue entre usuarios del
          sistema central y de sucursales.
        </p>
        <p className="mt-2 text-justify leading-relaxed">
          El sistema solo hace peticiones a archivos json dentro de los archivos
          de la pagina y no a una base de datos, por lo que no es necesario un
          servidor para su funcionamiento.
        </p>
        <p className="mt-2 text-justify leading-relaxed">
          El sistema incluye módulos como{" "}
          <strong>Empleados, Clientes, Productos, Pedidos y Ventas</strong> para
          la sucursal, y <strong>Sucursales, Productos y Pedidos</strong> para
          la parte central. Al iniciar sesión como "Administrador" (central) o
          con el usuario "22040000" (sucursal), se puede navegar por las
          diferentes funcionalidades del sistema.
        </p>
        <p className="mt-2 text-justify leading-relaxed">
          Participé en el desarrollo del frontend con enfoque en varios módulos
          (como productos, pedidos y empleados), aunque el trabajo fue en equipo
          y la asignación de partes fue dinámica. Este proyecto fue parte del
          aprendizaje de JavaScript en 2023, y aunque aún contiene algunos
          errores, fue fundamental para consolidar conocimientos de desarrollo
          web estructurado.
        </p>
      </>
    ),
  },
  atractivos: {
    image: "/img/projects/atractivos.png",
    title: "Atractivos Turísticos de México",
    subtitle: "Sitio web informativo",
    description:
      "Página web sencilla con información e imágenes sobre los principales atractivos turísticos del país.",
    rol: "Diseño y maquetación web",
    technologies: ["HTML", "CSS", "JavaScript"],
    repositorio: "https://github.com/Manuel-Gaona/atractivos",
    link: "https://manuel-gaona.github.io/atractivos/",
    contenidoExtra: (
      <>
        <h3 className="mt-4 text-xl font-semibold">Descripción del proyecto</h3>
        <div className="mt-2 space-y-2 text-justify leading-relaxed">
          <p>
            Este fue el primer proyecto que desarrollé para aprender los
            fundamentos de HTML y CSS. Se trata de un sitio web informativo y
            responsivo sobre los principales destinos turísticos de México,
            diseñado completamente con tecnologías básicas del desarrollo web.
          </p>
          <p>
            La página principal muestra una galería visual con el nombre e
            imagen representativa de cada atractivo turístico. Al hacer clic
            sobre uno de ellos, se abre una nueva página con información más
            detallada del lugar. Además, el sitio cuenta con secciones que
            agrupan los destinos por categorías: zonas arqueológicas, atractivos
            naturales y museos.
          </p>
          <p>
            Todo el diseño, navegación y estilo fueron implementados únicamente
            con HTML y CSS. Solo se incluyó JavaScript en dos secciones
            adicionales —una lista interactiva y una página de suscripción— como
            parte de ejercicios complementarios solicitados para introducirnos a
            conceptos básicos de JavaScript.
          </p>
        </div>
      </>
    ),
  },
  "movie-poster-php": {
    image: "/img/projects/movie-poster-php.png",
    title: "Movie Poster PHP",
    subtitle: "Cartel de la proxima película de Marvel",
    description: "Pagina de aprenizaje autodidacta de PHP",
    rol: "Desarrollador Fullstack",
    technologies: ["PHP", "cURL", "HTML", "CSS", "Pico CSS"],
    repositorio: "https://github.com/Manuel-Gaona/movie-poster-php",
    link: "https://posterphp.mgaona.software/",
    notas: [
      {
        message:
          "La pagina puede tardar un poco en cargar, ya que esta deplegado en heroku usando un plan de hibernación.",
        type: "warning",
      },
    ],
    contenidoExtra: (
      <>
        <h3 className="mt-4 text-xl font-semibold">Descripción del proyecto</h3>
        <div className="mt-2 space-y-2 text-justify leading-relaxed">
          <p>
            Este proyecto fue realizado como parte de mi aprendizaje autodidacta
            de PHP, siguiendo el tutorial de Midudev sobre cómo crear una
            landing page con este lenguaje. La idea fue replicar el diseño de un
            cartel ficticio de una próxima película de Marvel, utilizando HTML,
            CSS y lógica básica de PHP para organizar el contenido y la
            estructura del sitio.
          </p>
          <p>
            Aunque el tutorial incluía una explicación sobre cómo hacer el
            despliegue profesional del proyecto, decidí subirlo por mi cuenta a
            Heroku como parte de mi proceso de experimentación y práctica
            individual con servidores web.
          </p>
        </div>
      </>
    ),
  },
};
