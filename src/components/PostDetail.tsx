import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useParams, Link } from "react-router-dom";
import { POSTS } from "../data/data";
import back from "../assets/return-back.svg";
import NotFound from "../pages/NotFound";

const PostDetail = () => {
  const { id } = useParams();

  const post = POSTS.flatMap((item) => item.elements).find(
    (element) => element.id === id
  );

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
        <h1 className="text-2xl font-bold text-zinc-50">
          Detalles del Elemento
        </h1>
        <Link to={"/"} className="py-2 px-4 rounded">
          <img
            className="h-9 w-9 hover:scale-105 ease-in-out duration-150"
            src={back}
            alt="come-back.svg"
          />
        </Link>
      </div>
      <span className="text-zinc-100">Nombre: {post.title}</span>

      {post.widget1 && (
        <div className="mt-4">
          <span className="text-zinc-100">{post.widget1.title}</span>
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
        <div className="mt-6">
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

      {post.widget3 && (
        <div className="mt-6">
          <span className="text-zinc-100">{post.widget3.title}</span>
          <SyntaxHighlighter
            language={post.widget3.languaje}
            style={twilight}
            className="rounded-2xl"
          >
            {post.widget3.code}
          </SyntaxHighlighter>
        </div>
      )}

      {post.widget4 && (
        <div className="mt-6">
          <span className="text-zinc-100">{post.widget4.title}</span>
          <SyntaxHighlighter
            language={post.widget4.languaje}
            style={twilight}
            className="rounded-2xl"
          >
            {post.widget4.code}
          </SyntaxHighlighter>
        </div>
      )}

      {post.widget5 && (
        <div className="mt-6">
          <span className="text-zinc-100">{post.widget5.title}</span>
          <SyntaxHighlighter
            language={post.widget5.languaje}
            style={twilight}
            className="rounded-2xl"
          >
            {post.widget5.code}
          </SyntaxHighlighter>
        </div>
      )}

      {post.widget6 && (
        <div className="mt-6">
          <span className="text-zinc-100">{post.widget6.title}</span>
          <SyntaxHighlighter
            language={post.widget6.languaje}
            style={twilight}
            className="rounded-2xl"
          >
            {post.widget6.code}
          </SyntaxHighlighter>
        </div>
      )}

      {post.widget7 && (
        <div className="mt-6">
          <span className="text-zinc-100">{post.widget7.title}</span>
          <SyntaxHighlighter
            language={post.widget7.languaje}
            style={twilight}
            className="rounded-2xl"
          >
            {post.widget7.code}
          </SyntaxHighlighter>
        </div>
      )}

      {post.widget8 && (
        <div className="mt-6">
          <span className="text-zinc-100">{post.widget8.title}</span>
          <SyntaxHighlighter
            language={post.widget8.languaje}
            style={twilight}
            className="rounded-2xl"
          >
            {post.widget8.code}
          </SyntaxHighlighter>
        </div>
      )}

      {post.widget9 && (
        <div className="mt-6">
          <span className="text-zinc-100">{post.widget9.title}</span>
          <SyntaxHighlighter
            language={post.widget9.languaje}
            style={twilight}
            className="rounded-2xl"
          >
            {post.widget9.code}
          </SyntaxHighlighter>
        </div>
      )}

      {post.widget10 && (
        <div className="mt-6">
          <span className="text-zinc-100">{post.widget10.title}</span>
          <SyntaxHighlighter
            language={post.widget10.languaje}
            style={twilight}
            className="rounded-2xl"
          >
            {post.widget10.code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
