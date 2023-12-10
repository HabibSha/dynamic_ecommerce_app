import React, { useEffect, useState } from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { slides } from "../constants";
import hero2 from "../../assets/hero/hero2.jpg";
import hero3 from "../../assets/hero/hero3.jpg";
import HomeWrap2 from "./HomeWrap2";

const HomeWrap1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const startSlider = () => {
    setInterval(() => {
      nextSlide();
    }, 3000);
  };

  useEffect(() => {
    startSlider();
  }, [currentIndex]);

  return (
    <section className="w-full bg-indigo-100 h-[835px]">
      <article className="max-w-[1580px] mx-auto flex gap-4 py-7 sm:px-6 px-4 group">
        <div className="w-[70%] h-[550px] relative">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
            className="w-full h-full bg-center bg-cover duration-300 rounded-xl"
          >
            <div className="w-full h-full bg-black/40 rounded-xl"></div>
          </div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block p-2 -translate-x-0 translate-y-[-50%] rounded-full bg-white/10 absolute top-[50%] left-5 cursor-pointer">
            <FiChevronLeft size={30} onClick={prevSlide} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block p-2 -translate-x-0 translate-y-[-50%] rounded-full bg-white/10 absolute top-[50%] right-5 cursor-pointer">
            <FiChevronRight size={30} onClick={nextSlide} />
          </div>
        </div>
        <div className="w-[30%] h-[550px] flex flex-col gap-4 relative">
          <div
            style={{ backgroundImage: `url(${hero2})` }}
            className="w-full h-[270px] bg-cover hover:bg-center duration-300 rounded-xl"
          ></div>
          <div
            style={{ backgroundImage: `url(${hero3})` }}
            className="w-full h-[270px] bg-cover hover:bg-center duration-300 rounded-xl"
          ></div>
        </div>
      </article>
      <article className="max-w-[1580px] mx-auto pb-7 sm:px-6 px-4">
        <HomeWrap2 />
      </article>
    </section>
  );
};

export default HomeWrap1;
