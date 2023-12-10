import React from "react";

import { upperCats } from "../constants";

const UpperCategory = () => {
  return (
    <section className="max-w-[1580px] mx-auto flex sm:px-6 px-4 py-14">
      <article className="flex items-center gap-8">
        {upperCats.map((el) => {
          const { id, title, price, img } = el;
          return (
            <div key={id} className="w-full relative flex items-center group">
              <div className="w-[490px] h-[230px]">
                <img
                  src={img}
                  alt="Banner"
                  className="w-full h-full object-cover overflow-hidden group-hover:scale-[1.10] transition-transform duration-1000"
                />
              </div>
              <div className="absolute max-w-[240px] right-0 top-11 px-8">
                <h5 className="text-[24px] font-bold mb-[14px]">{title}</h5>
                <p className="text-[20px] text-bgColor font-bold mb-[10px]">
                  $<span>{price}.00</span>
                </p>
                <button className="text-[14px] font-medium underline hover:no-underline">
                  SHOP NOW
                </button>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default UpperCategory;
