import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { items } from "../constants";

const HomeWrap2 = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();
  const prevSlide = () => {
    slideRef.current.scrollLeft -= 223;
  };

  const nextSlide = () => {
    slideRef.current.scrollLeft += 223;
  };
  return (
    <>
      <section className="w-full relative group">
        <article
          className="flex gap-[30px] overflow-x-scroll scrollbar-none scroll-smooth transition-all duration-700"
          ref={slideRef}
        >
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className="min-w-[193px] h-[200px] bg-white relative rounded-md"
              >
                <Link className="flex justify-center">
                  <img
                    src={item.img}
                    alt="Featured"
                    className="w-[173px] h-[200px] hover:scale-[1.05] duration-500"
                  />
                </Link>
                <Link>
                  <p className="w-full absolute bottom-5 text-center font-medium hover:text-bgColor">
                    {item.category}
                  </p>
                </Link>
              </div>
            );
          })}
        </article>
        <article className="flex justify-between">
          <div className="hidden group-hover:block hover:text-white p-1 rounded-full bg-white/10 hover:bg-bgColor -translate-x-0 translate-y-[-50%] absolute top-[50%] left-0 cursor-pointer">
            <FiChevronLeft size={20} onClick={prevSlide} />
          </div>
          <div className="hidden group-hover:block hover:text-white p-1 rounded-full bg-white/10 hover:bg-bgColor -translate-x-0 translate-y-[-50%] absolute top-[50%] right-0 cursor-pointer">
            <FiChevronRight size={20} onClick={nextSlide} />
          </div>
        </article>
      </section>
    </>
  );
};

export default HomeWrap2;
