import { Link } from "react-router-dom";
import data from "../data/data.json";
import { Posts } from "../interfaces/posts.interface";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto font-sans text-white">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="sm:text-3xl text-lg font-extrabold mt-4 text-balance">
          Herramientas para desarrollo web
        </h2>
        <p className=" text-zinc-400 mt-4 sm:mt-6 text-sm">
          Plataforma personalizada de snippets, diseñada para tener acceso
          rápido a mis fragmentos de código favoritos en un solo lugar.
        </p>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-y-9 mt-12">
        {data.map((post: Posts) => (
          <div key={post.id} className="text-center">
            <img
              className="w-28 h-28 mb-4 inline-block p-3 bg-white rounded-xl"
              src={post.image}
              alt="imagen placeholder.png"
              draggable={false}
            />
            <h3 className="text-xl font-semibold mb-2">{post.name}</h3>
            <Link
              to={`/${post.id}`}
              className="text-zinc-400 font-bold inline-block text-sm hover:underline"
            >
              Ver más
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
