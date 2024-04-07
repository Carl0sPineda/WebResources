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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-8">
        {data.map((post: Posts) => (
          <Link to={`/${post.id}`} key={post.id}>
            <div className="group cursor-pointer relative">
              <img
                src={post.image}
                alt={post.name}
                className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-100 text-zinc-200 font-bold text-center rounded-md">
                {post.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
