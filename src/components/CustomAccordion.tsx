import { Link } from "react-router-dom";
import { useState } from "react";
import { Element } from "../interfaces/posts.interface";
import down from "../assets/down.svg";
import "./CustomAccordion.css";

interface CustomAccordionProps {
  title: string;
  elements: Element[];
}

const CustomAccordion = ({ title, elements }: CustomAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "active" : ""}`}>
      <div
        className={`accordion-header ${isOpen ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <p>{title}</p>

        <span className={`material-symbols-outlined ${isOpen ? "active" : ""}`}>
          <img src={down} alt="down-action.svg" width={25} height={25} />
        </span>
      </div>

      {isOpen && (
        <div className="accordion-content">
          {elements.map((element, index) => (
            <Link to={`/${element.id}`} key={element.id}>
              <ul className="hover:bg-[#302f2f] transition-colors duration-400 rounded-md ease-in-out text-white">
                {index + 1}. {element.title}
              </ul>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomAccordion;
