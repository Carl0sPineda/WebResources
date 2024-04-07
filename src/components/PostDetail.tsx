import { useParams, Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
import data from "../data/data.json";
import back from "../assets/return-back.svg";
import NotFound from "../pages/NotFound";

const PostDetail = () => {
  const { id } = useParams();
  const post = data.find((post) => post.id === parseInt(id ?? ""));

  if (!post) {
    return (
      <NotFound
        title="404"
        message="Post no encontrado"
        buttonText="Volver al inicio"
      />
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-zinc-100">
          Detalles del Elemento
        </h1>
        <Link to={"/"} className=" text-white font-bold py-2 px-4 rounded">
          <img
            className="h-9 w-9 hover:scale-105 ease-in-out duration-150"
            src={back}
            alt="come-back.svg"
          />
        </Link>
      </div>
      <p className="mb-4 text-zinc-100">Nombre: {post.name}</p>

      {post.widget1 && (
        <div>
          <span className="text-zinc-100">{post.widget1?.title}</span>
          <SyntaxHighlighter
            language={post.widget1.languaje}
            style={twilight}
            className="rounded-2xl"
          >
            {post.widget1.code}
          </SyntaxHighlighter>
        </div>
      )}

      {post.widget2 && (
        <div>
          <span className="text-zinc-100">{post.widget2.title}</span>
          <SyntaxHighlighter
            language={post.widget2.languaje}
            style={twilight}
            className="rounded-2xl"
          >
            {post.widget2.code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
