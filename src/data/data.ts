import { DataItem } from "../interfaces/posts.interface";

export const POSTS: DataItem[] = [
  {
    id: "1",
    title: "🎈 React",
    elements: [
      {
        id: "A-01",
        title: "React props",
        widget1: {
          languaje: "jsx",
          title: "1. React Router",
          code: 'import { BrowserRouter as Router, Routes, Route } from "react-router-dom";\nimport Home from "./Componente/Home";\nimport ItemDetail from "./Componente/ItemDetail";\n\nfunction App() {\n    return (\n        <>\n            <Router>\n                <Routes>\n                    <Route path="/" element={<Home />} />\n                    <Route path="/post/:id" element={<ItemDetail />} />\n                </Routes>\n            </Router>\n        </>\n    );\n}\n\nexport default App;',
        },
      },
      {
        id: "A-02",
        title: "Fetching de datos",
        widget1: {
          languaje: "jsx",
          title: "1. Fetch con react, axios y javascript",
          code: 'import { useState, useEffect } from "react";\nimport axios from "axios";\n\nconst App = () =>  {\n  const [data, setData] = useState([]);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      try {\n        const { data } = await axios.get(\n          "https://jsonplaceholder.typicode.com/comments"\n        );\n        setData(data);\n      } catch (error) {\n        console.error("Error fetching data:", error);\n      }\n    };\n    fetchData();\n  }, []);\n\n  return (\n    <>\n      {data.map((item) => (\n        <ul key={item.id}>\n          <li className="text-white text-center">{item.email}</li>\n          <li className="text-white text-center">{item.name}</li>\n          <li className="text-white text-center">{item.body}</li>\n        </ul>\n      ))}\n    </>\n  );\n}\n\nexport default App;',
        },
        widget2: {
          languaje: "jsx",
          title: "2. Fetch con react, axios y typescript",
          code: 'import { useState, useEffect } from "react";\nimport axios from "axios";\n\ninterface Comments {\n  postId: number;\n  id: number;\n  name: string;\n  email: string;\n  body: string;\n}\n\nconst App = () => {\n  const [data, setData] = useState<Comments[]>([]);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      try {\n        const { data } = await axios.get<Comments[]>(\n          "https://jsonplaceholder.typicode.com/comments"\n        );\n        setData(data);\n      } catch (error) {\n        console.error("Error fetching data:", error);\n      }\n    };\n    fetchData();\n  }, []);\n\n  return (\n    <>\n      {data.map((item) => (\n        <ul key={item.id}>\n          <li className="text-white text-center">{item.email}</li>\n          <li className="text-white text-center">{item.name}</li>\n          <li className="text-white text-center">{item.body}</li>\n        </ul>\n      ))}\n    </>\n  );\n}\n\nexport default App;',
        },
      },
      { id: "A-03", title: "React" },
    ],
  },
  {
    id: "2",
    title: "🎀 ORMS",
    elements: [
      {
        id: "B-01",
        title: "Prisma comandos",
        widget1: {
          title: "1. Prisma comandos básicos",
          languaje: "sql",
          code: "Ver todas mis dbs ===>  turso db list \nCrear una nueva db ===> turso db create <dbname>\nConectarse a la db y ejecutar sql ===> turso db shell <dbname>\nVer info de mi db como URL y locacion de la db ===> turso db show <dbname>\ngenera un token valido para la conexion ===>  turso db tokens create <dbname>",
        },
      },
      {
        id: "B-02",
        title: "Turso comandos",
        widget1: {
          title: "1. Turso comandos básicos",
          languaje: "sql",
          code: "Ver todas mis dbs ===>  turso db list \nCrear una nueva db ===> turso db create <dbname>\nConectarse a la db y ejecutar sql ===> turso db shell <dbname>\nVer info de mi db como URL y locacion de la db ===> turso db show <dbname>\ngenera un token valido para la conexion ===>  turso db tokens create <dbname>",
        },
        widget2: {
          languaje: "sql",
          title: "2. Turso db sql",
          code: "CREATE TABLE users (ID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);\n\n-- Cambiar el nombre de la columna ID a id\nALTER TABLE users RENAME COLUMN ID TO id;\n\n-- Añadir la columna email\nALTER TABLE users ADD COLUMN email TEXT;\n\n-- Añadir la columna password\nALTER TABLE users ADD COLUMN password TEXT;",
        },
      },
    ],
  },
  {
    id: "3",
    title: "🎃 DBS",
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
  //   {
  //     id: "4",
  //     title: "🕶 Backend",
  //     elements: [
  //       { id: "D-01", title: "Element 1 of Item 3" },
  //       { id: "D-02", title: "Element 2 of Item 3" },
  //       { id: "D-03", title: "Element 3 of Item 3" },
  //       { id: "D-04", title: "Element 4 of Item 3" },
  //     ],
  //   },
];
