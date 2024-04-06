import { Link } from "react-router-dom";
import data from "../data/data.json";
import { Posts } from "../interfaces/posts.interface";

function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto font-sans text-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="sm:text-3xl text-2xl font-extrabold mt-4">
            Discover Our Exclusive Features
          </h2>
          <p className="text-sm text-gray-500 mt-6">
            Unlock a world of possibilities with our exclusive features. Explore
            how our unique offerings can transform your journey and empower you
            to achieve more.
          </p>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-y-9 mt-12">
          {data.map((post: Posts) => (
            <div key={post.id} className="text-center">
              <img
                className="w-28 h-28 mb-4 inline-block p-3 bg-white rounded-xl"
                src={post.image}
                alt="imagen placeholder.png"
              />
              <h3 className="text-xl font-semibold mb-2">{post.name}</h3>
              {/* <p className="text-gray-500 text-sm">{post.name}</p> */}
              <Link
                to={`/${post.id}`}
                className="text-gray-500 font-bold inline-block text-sm hover:underline"
              >
                Ver más
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
