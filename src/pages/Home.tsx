import { POSTS } from "../data/data.ts";
import { DataItem } from "../interfaces/posts.interface.ts";
import CustomAccordion from "../components/CustomAccordion.tsx";

const Home = () => {
  return (
    <div className="bg-[#000000] min-h-screen">
      <h1 className="text-center text-xl sm:text-3xl text-white pt-10 font-black">
        Herramientas para desarrollo web
      </h1>
      <h4 className="text-center text-white pt-4">
        Plataforma personalizada de snippets, diseñada para tener acceso rápido
        a mis fragmentos de código favoritos en un solo lugar
      </h4>
      <div className="flex flex-col items-center pt-12">
        {POSTS.map((item: DataItem) => (
          <div key={item.id}>
            <CustomAccordion
              title={item.title}
              elements={item.elements}
              key={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
