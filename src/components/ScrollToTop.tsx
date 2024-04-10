import { useEffect, useState } from "react";
import top_circle from "../assets/top-circle.svg";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const onScroll = () => {
    let pixelsFromTop = window.scrollY;

    pixelsFromTop > 500 ? setShowButton(true) : setShowButton(false);

    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;

    let barElement = document.getElementById("bar");
    if (barElement) {
      barElement.style.width = `${percentage}%`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="w-full fixed top-0 left-0">
        <div className="absolute top-0 left-0 h-1 bg-zinc-200" id="bar" />
      </div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bg-[#2C2929] rounded-full p-1 -right-20 sm:right-4 bottom-10 cursor-pointer transform transition-transform ease-in-out duration-500"
          style={{ transform: "translateX(-100px)" }}
          aria-labelledby="button back to top"
        >
          <img src={top_circle} alt="top-cirvle.svg" width={25} height={25} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
