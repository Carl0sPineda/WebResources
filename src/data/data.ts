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
        title: "Turso comandos",
        widget1: {
          title: "1. Comandos básicos de shell",
          languaje: "sql",
          code: "-- Iniciar sesión con la shell\nturso auth login\n-- Ver todas mis bases de datos\nturso db list\n-- Conectarse a la db y ejecutar sql\nturso db shell <dbname>\n-- Crear una nueva base de datos\nturso db create <dbname>\n-- Ver información de mi base de datos como URL y locación\nturso db show <dbname>\n-- Generar un token válido para la conexión\nturso db tokens create <dbname>",
        },
        widget2: {
          languaje: "sql",
          title: "2. Comandos de sqlite para turso",
          code: "-- Creación de tablas y relación de uno a muchos\ncreate table grupos (\n  id integer primary key autoincrement,\n  nombre text not null\n);\n\ncreate table alumnos (\n  id integer primary key autoincrement,\n  id_grupo integer,\n  nombre text not null,\n  direccion text not null,\n  foreign key(id_grupo) references grupos(id)\n);\n\n-- Añadir la columna cantidad a la tabla grupos\nalter table grupos add column cantidad integer;\n\n-- Cambiar el nombre de la columna a apellidos\nalter table grupos rename column nombre to apellidos;\n\n-- Eliminar una columna\nalter table grupos drop column nombre;\n\n-- Cambiar el nombre de una tabla\nalter table alumnos rename to estudiantes;\n\n-- Eliminar tablas y datos\ndrop table grupos;\ndrop table alumnos;",
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
          code: '--Verificar el estilo de partición del disco entre MBR/GPT\nEn PowerShell escribir el comando => "Get-Disk"\n\n--Verificar el tipo de BIOS, si es UEFI se debe entrar en la BIOS y desactivar el secure boot\nPresionar "Windows + R"\nEscribir "msinfo32" y darle enter',
        },
        widget2: {
          title: "2. Inicio del booteo mediante una pendrive",
          languaje: "bash",
          code: "--Requisitos\nUna pendrive\nDescargar el ISO del sistema operativo, por ejemplo Ubuntu\nInstalar Rufus y hacer el booteo en la USB, se formateará el pendrive\nArrancar el sistema mediante BIOS con la pendrive",
        },
        widget3: {
          title: "3. Gestión de particiones",
          languaje: "bash",
          code: "--Ejemplo con 500GB\n\nPartición Swap\nTamaño: 10240MB (10GB) El doble de memoria RAM que tiene el equipo para dispositivos con menos de 4GB\nTipo de partición: Lógica\nSistema de Ficheros: área de intercambio/swap\nPunto de montaje: en este caso no aplica\n\nPartición /\nSe almacenan las aplicaciones/actualizaciones que voy a instalar de forma predeterminada\nTamaño: 409600MB (400GB) Hay que pensar cuantas aplicaciones vamos a instalar y el uso que le daremos, aproximado y ajustar este tamaño en consecuencia\nTipo de partición: Lógica\nSistema de Ficheros: ext4\nPunto de montaje: /\n\nPartición /home\nAquí se almacenan fotos, videos etc\nTamaño: 92160MB (90GB)\nTipo de partición: Lógica\nSistema de Ficheros: ext4\nPunto de montaje: /home",
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
          title: "1. Agregar nuevos temas",
          languaje: "bash",
          code: 'Dirigirse a "https://www.cinnamon-look.org/browse?cat=135&ord=rating"\n\nSeleccionar uno de ellos, descargar el .tar.xz y extraerlo\nIr a carpeta personal y mostrar los archivos ocultos, luego pegar todo en .themes\nNota: Si hay variantes de iconos dentro de la carpeta sacarlos, por ejemplo dark y light',
        },
      },
      // { id: "D-03", title: "Element 3 of Item 3" },
    ],
  },
];
