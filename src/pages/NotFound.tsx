import { Link } from "react-router-dom";

interface NotFoundProps {
  title: string;
  message: string;
  buttonText: string;
}

const NotFound = ({ title, message, buttonText }: NotFoundProps) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold text-gray-200">{title}</h1>
      <span className="text-4xl font-medium text-gray-200">{message}</span>
      <Link to={"/"} className="mt-4 text-xl text-[#6ae88b] hover:underline">
        {buttonText}
      </Link>
    </div>
  );
};

export default NotFound;
