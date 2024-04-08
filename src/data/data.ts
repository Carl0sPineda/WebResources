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
      { id: "A-02", title: "Manejo de estado" },
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
    elements: [{ id: "C-01", title: "Procedimientos almacenados con sql" }],
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
