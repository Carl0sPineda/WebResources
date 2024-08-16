import { DataItem } from "../interfaces/posts.interface";

export const POSTS: DataItem[] = [
  {
    id: "1",
    title: "🎈 React",
    elements: [
      {
        id: "A-01",
        title: "Props entre componentes",
        widget1: {
          languaje: "jsx",
          title: "1. Creación de la interfaz",
          code: "export interface IComments {\n  postId: number;\n  id: number;\n  name: string;\n  email: string;\n  body: string;\n}",
        },
        widget2: {
          languaje: "jsx",
          title: "2. Componente hijo con props",
          code: 'import { IComments } from "../interface/comments.interface";\n\ninterface CommentsProps {\n  comments: IComments;\n}\n\nconst Comments = ({ comments }: CommentsProps) => {\n  return (\n    <>\n      <ul>\n        <li>{comments.name}</li>\n        <li>{comments.email}</li>\n        <li>{comments.body}</li>\n      </ul>\n    </>\n  );\n};\n\nexport default Comments;',
        },
        widget3: {
          languaje: "jsx",
          title: "3. Componente padre",
          code: 'import { useState, useEffect } from "react";\nimport { IComments } from "./interface/comments.interface";\nimport Comments from "./components/Comments";\nimport axios from "axios";\n\nconst App = () => {\n  const [comments, setComments] = useState<IComments[]>([]);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      try {\n        const { data } = await axios.get<IComments[]>(\n          "https://jsonplaceholder.typicode.com/comments"\n        );\n        setComments(data);\n      } catch (error) {\n        console.error("Error fetching data:", error);\n      }\n    };\n    fetchData();\n  }, []);\n\n  return (\n    <>\n      {comments?.map((comment) => (\n        <Comments key={comment.id} comments={comment} />\n      ))}\n    </>\n  );\n};\n\nexport default App;',
        },
      },
      {
        id: "A-02",
        title: "Fetching de datos",
        widget1: {
          languaje: "jsx",
          title: "1. Fetch con react, axios y javascript",
          code: "import { useState, useEffect } from 'react';\nimport axios from 'axios';\n\nconst App = () => {\n  const [comments, setComments] = useState([]);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      try {\n        const { data } = await axios.get(\n          'https://jsonplaceholder.typicode.com/comments'\n        );\n        setComments(data);\n      } catch (error) {\n        console.error('Error fetching data:', error);\n      }\n    };\n    fetchData();\n  }, []);\n\n  return (\n    <>\n      {comments?.map((comment) => (\n        <ul key={comment.id}>\n          <li>{comment.name}</li>\n          <li>{comment.email}</li>\n          <li>{comment.body}</li>\n        </ul>\n      ))}\n    </>\n  );\n};\n\nexport default App;",
        },
        widget2: {
          languaje: "jsx",
          title: "2. Fetch con react, axios y typescript",
          code: 'import { useState, useEffect } from "react";\nimport axios from "axios";\n\ninterface IComments {\n  postId: number;\n  id: number;\n  name: string;\n  email: string;\n  body: string;\n}\n\nconst App = () => {\n  const [comments, setComments] = useState<IComments[]>([]);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      try {\n        const { data } = await axios.get<IComments[]>(\n          "https://jsonplaceholder.typicode.com/comments"\n        );\n        setComments(data);\n      } catch (error) {\n        console.error("Error fetching data:", error);\n      }\n    };\n    fetchData();\n  }, []);\n\n  return (\n    <>\n      {comments?.map((comment) => (\n        <ul key={comment.id}>\n          <li>{comment.name}</li>\n          <li>{comment.email}</li>\n          <li>{comment.body}</li>\n        </ul>\n      ))}\n    </>\n  );\n};\n\nexport default App;',
        },
      },
    ],
  },
  {
    id: "2",
    title: "🎀 Comandos",
    elements: [
      {
        id: "B-01",
        title: "Turso",
        widget1: {
          title: "1. Comandos básicos de shell",
          languaje: "bash",
          code: "## Iniciar sesión con la shell\nturso auth login\n## Ver todas mis bases de datos\nturso db list\n## Conectarse a la db y ejecutar sql\nturso db shell <dbname>\n## Crear una nueva base de datos\nturso db create <dbname>\n## Ver información de mi base de datos como URL y locación\nturso db show <dbname>\n## Generar un token válido para la conexión\nturso db tokens create <dbname>",
        },
        widget2: {
          languaje: "sql",
          title: "2. Comandos de sqlite para Turso",
          code: "## Creación de tablas y relación de uno a muchos\ncreate table grupos (\n  id integer primary key autoincrement,\n  nombre text not null\n);\n\ncreate table alumnos (\n  id integer primary key autoincrement,\n  id_grupo integer,\n  nombre text not null,\n  direccion text not null,\n  foreign key(id_grupo) references grupos(id)\n);\n\n## Añadir la columna cantidad a la tabla grupos\nalter table grupos add column cantidad integer;\n\n## Cambiar el nombre de la columna a apellidos\nalter table grupos rename column nombre to apellidos;\n\n## Eliminar una columna\nalter table grupos drop column nombre;\n\n## Cambiar el nombre de una tabla\nalter table alumnos rename to estudiantes;\n\n## Eliminar tablas y datos\ndrop table grupos;\ndrop table alumnos;",
        },
      },
      {
        id: "B-02",
        title: "Docker",
        widget1: {
          title: "1. Comandos básicos Docker",
          languaje: "bash",
          code: "## Lista todas las imágenes de Docker que están almacenadas localmente en tu máquina\ndocker images\n## Lista todos los contenedores de Docker en tu máquina, incluyendo aquellos que están\n## en ejecución, detenidos y en estado de salida\ndocker ps -a\n## Inicia el proceso del contendor\ndocker start más nombre/ID del contenedor \n## Detiene el contendor\ndocker stop más nombre/ID del contenedor\n## Elimina un contenedor que está detenido\ndocker rm más nombre/ID del contenedor",
        },
        widget2: {
          title: "2. Archivos configurables en Docker",
          languaje: "bash",
          code: "## Dockerfile\nDefine la manera en que se debe construir una imagen de Docker, describiendo los pasos\nnecesarios para configurar el entorno y la aplicación\n\n## .dockerignore \nEspecifica qué archivos y directorios deben ser ignorados durante la construcción de\nuna imagen de Docker para evitar incluir archivos innecesarios\n\n## docker-compose.yml\nDefine y gestiona aplicaciones Docker multicontenedor de manera estructurada y\nsimplificada, permitiendo la configuración de servicios, redes y volúmenes",
        },
      },
      {
        id: "B-03",
        title: "VSCode con ASP.NET Core",
        widget1: {
          title: "1. Comandos para inicializar un nuevo proyecto",
          languaje: "bash",
          code: "## Muestra todas las plantillas disponibles que puedes utilizar\ndotnet new list\n\n## Generar un nuevo proyecto\ndotnet new <nombre_corto> -o <nombre_proyecto>\n\n## Ejecutar el proyecto\ndotnet run",
        },
        widget2: {
          title: "2. Comando para Code First",
          languaje: "bash",
          code: "Defines tus modelos en el código y con eso generas la base de datos automáticamente\n\n## Instalar Entity Framework de forma global\ndotnet tool install --global dotnet-ef\n\n## Añade este paquete al proyecto\ndotnet add package Microsoft.EntityFrameworkCore.Design\n\n## Antes de ejecutar este comando debemos tener el DbContext, Modelos y la cadena de\n## conexión para la base de datos previamente configurados\ndotnet ef migrations add <nombre_migración>\n\n## Este comando mantiene la base de datos sincronizada con el modelo de datos definido\n## en el código de tu aplicación\ndotnet ef database update",
        },
        widget3: {
          title: "3. Comando para Database First",
          languaje: "bash",
          code: "Partes de una base de datos existente, la cual genera los modelos y el DbContext\n\n## Instalar Entity Framework de forma global\ndotnet tool install --global dotnet-ef\n\n## Añade este paquete al proyecto\ndotnet add package Microsoft.EntityFrameworkCore.Design\n\n## Este es el comando principal que le dice a .NET que quieres crear de forma\n## automática el DbContext y los modelos basados en una base de datos existente\ndotnet ef dbcontext scaffold Name=ConnectionStrings:DefaultConnection\nMicrosoft.EntityFrameworkCore.SqlServer --output-dir Models",
        },
      },
    ],
  },
  {
    id: "3",
    title: "🎃 Bases de datos",
    elements: [
      {
        id: "C-01",
        title: "Procedimientos almacenados con SQL",
        widget1: {
          title: "1. Crear la base de datos y tabla",
          languaje: "sql",
          code: "CREATE DATABASE TODO_APP;\nGO\nUSE TODO_APP;\nGO\n\nCREATE TABLE tasks (\n    id int identity(1,1) primary key NOT NULL,\n    title varchar(40) NOT NULL,\n    autor varchar(30) NOT NULL,\n    status_task varchar(25) NOT NULL,\n    description varchar(150) NOT NULL,\n    start_date date NOT NULL,\n    end_date date NOT NULL\n);\nGO",
        },
        widget2: {
          title: "2. Obtener todos los registros de la tabla",
          languaje: "sql",
          code: "CREATE PROCEDURE sp_GetAllTasks\nAS\nBEGIN\n  SELECT * FROM tasks;\nEND\nGO",
        },
        widget3: {
          title: "3. Obtener un registro por su id",
          languaje: "sql",
          code: "CREATE PROCEDURE sp_GetTaskById\n  @id int\nAS\nBEGIN\n  SELECT * FROM tasks\n  WHERE id = @id;\nEND\nGO",
        },
        widget4: {
          title: "4. Añadir un registro en la tabla",
          languaje: "sql",
          code: "CREATE PROCEDURE sp_AddTask\n  @title varchar(40),\n  @autor varchar(30),\n  @status_task varchar(25),\n  @description varchar(150),\n  @start_date date,\n  @end_date date\nAS\nBEGIN\n  INSERT INTO tasks\n    VALUES (@title, @autor, @status_task, @description, @start_date, @end_date);\nEND\nGO",
        },
        widget5: {
          title: "5. Actualizar un registro en la tabla",
          languaje: "sql",
          code: "CREATE PROCEDURE sp_UpdateTask\n  @id int,\n  @title varchar(40),\n  @autor varchar(30),\n  @status_task varchar(25),\n  @description varchar(150),\n  @start_date date,\n  @end_date date\nAS\nBEGIN\n  UPDATE tasks\n  SET title = @title,\n    autor = @autor,\n    status_task = @status_task,\n    description = @description,\n    start_date = @start_date,\n    end_date = @end_date\n  WHERE id = @id;\nEND\nGO",
        },
        widget6: {
          title: "6. Eliminar un registro en la tabla",
          languaje: "sql",
          code: "CREATE PROCEDURE sp_DeleteTask\n  @id int\nAS\nBEGIN\n  DELETE tasks\n  WHERE id = @id;\nEND\nGO",
        },
      },
    ],
  },
  {
    id: "4",
    title: "🪁 Linux",
    elements: [
      {
        id: "D-01",
        title: "Dual-Boot",
        widget1: {
          title: "1. Proceso previo al booteo",
          languaje: "bash",
          code: '## Verificar el estilo de partición del disco entre MBR/GPT\nEn PowerShell escribir el comando => "Get-Disk"\n\n## Verificar el tipo de BIOS, si es UEFI se debe entrar en la BIOS\n## y desactivar el secure boot\nPresionar "Windows + R"\nEscribir "msinfo32" y darle enter',
        },
        widget2: {
          title: "2. Inicio del booteo mediante una pendrive",
          languaje: "bash",
          code: "## Requisitos\nUna pendrive\nDescargar el ISO del sistema operativo, por ejemplo Ubuntu\nInstalar BalenaEtcher y hacer el booteo en la USB, se formateará el pendrive\nUna vez finalizado el proceso retirar y volver a insertar el pendrive\nArrancar el sistema mediante BIOS con la pendrive",
        },
        widget3: {
          title: "3. Gestión de particiones",
          languaje: "bash",
          code: '## Ejemplo con 500GB\n\nPartición "/"\nSe almacenan las aplicaciones/actualizaciones que voy a instalar de forma predeterminada\nTamaño: 327680MB (320GB) Hay que pensar cuantas aplicaciones vamos a instalar y el uso que le daremos, aproximado y ajustar este tamaño en consecuencia\nTipo de partición: Lógica\nSistema de Ficheros: ext4\nPunto de montaje: "/"\n\nPartición "/home"\nAquí se almacenan fotos, videos etc\nTamaño: 184320MB (180GB)\nTipo de partición: Lógica\nSistema de Ficheros: ext4\nPunto de montaje: "/home"',
        },
        widget4: {
          title: "4. Cosas a tomar en cuenta",
          languaje: "bash",
          code: '## Para dualboot\nSi tengo previamente instalado el windows en RAID y quiero poner dualboot con linux en\nAHCI, debo estar cambiando para entrar windows en la bios RAID y el AHCI para linux,\npara evitar esto debo tener instalado ambos sistemas operativos en AHCI\n\n## Para una instalción limpia sólo linux\nPara eliminar por completo windows y migrar a sólo linux debo eliminar todas las\nparticiones creadas en ese momento, conservando las que vaya a realizar en linux\nempezando por el "/boot", "/" y "/home"',
        },
      },
      {
        id: "D-02",
        title: "Agregar iconos y temas",
        widget1: {
          title: "1. Agregar nuevos iconos",
          languaje: "bash",
          code: 'Dirigirse a "https://www.cinnamon-look.org/browse?cat=132&ord=rating"\n\nSeleccionar uno de ellos, descargar el .tar.xz y extraerlo\nIr a carpeta personal y mostrar los archivos ocultos, luego pegar todo en .icons\nNota: Si hay variantes de iconos dentro de la carpeta sacarlos, por ejemplo dark y light',
        },
        widget2: {
          title: "2. Agregar nuevos temas",
          languaje: "bash",
          code: 'Dirigirse a "https://www.cinnamon-look.org/browse?cat=135&ord=rating"\n\nSeleccionar uno de ellos, descargar el .tar.xz y extraerlo\nIr a carpeta personal y mostrar los archivos ocultos, luego pegar todo en .themes\nNota: Si hay variantes de iconos dentro de la carpeta sacarlos, por ejemplo dark y light',
        },
      },
      {
        id: "D-03",
        title: "Instalar Wails",
        widget1: {
          title: "1. Requisitos previos",
          languaje: "bash",
          code: 'Tener las versiones más recientes de Go y Node.js\nInstalar gcc, libgtk3 y libwebkit\n\n"sudo apt update"\n"sudo apt install gcc libgtk-3-dev libwebkit2gtk-4.0-dev"',
        },
        widget2: {
          title: "2. Instalar Wails Cli",
          languaje: "bash",
          code: 'Comando "go install github.com/wailsapp/wails/v2/cmd/wails@latest"\nIngresar en la terminal "nano .bashrc"\nAñadir al final "export PATH=$PATH:/home/[username]/go/bin/"\nIngresar en la terminal "source .bashrc"',
        },
        widget3: {
          title: "3. Verificación de la instalación",
          languaje: "bash",
          code: '"wails doctor"\n"wails version"',
        },
        widget4: {
          title: "4. Realizar el build",
          languaje: "bash",
          code: '## Para Linux\nComando "wails build -platform linux/amd64"\n## Para Windows\nComando "wails build -platform windows/amd64"',
        },
      },
      // { id: "D-04", title: "Element 4 of Item 4" },
    ],
  },
];
