import React from "react";

const items = [
  {
    id: 1,
    category: "Sneakers Shoes",
    img: "https://assets.ajio.com/medias/sys_master/root/20230908/ufVP/64fb203bafa4cf41f5d31b33/-286Wx359H-466550462-black-MODEL.jpg",
  },
  {
    id: 2,
    category: "Sneakers Shoes",
    img: "https://assets.ajio.com/medias/sys_master/root/20230908/ufVP/64fb203bafa4cf41f5d31b33/-286Wx359H-466550462-black-MODEL.jpg",
  },
  {
    id: 3,
    category: "Sneakers Shoes",
    img: "https://assets.ajio.com/medias/sys_master/root/20230908/ufVP/64fb203bafa4cf41f5d31b33/-286Wx359H-466550462-black-MODEL.jpg",
  },
  {
    id: 4,
    category: "Sneakers Shoes",
    img: "https://assets.ajio.com/medias/sys_master/root/20230908/ufVP/64fb203bafa4cf41f5d31b33/-286Wx359H-466550462-black-MODEL.jpg",
  },
  {
    id: 5,
    category: "Sneakers Shoes",
    img: "https://assets.ajio.com/medias/sys_master/root/20230908/ufVP/64fb203bafa4cf41f5d31b33/-286Wx359H-466550462-black-MODEL.jpg",
  },
  {
    id: 6,
    category: "Sneakers Shoes",
    img: "https://assets.ajio.com/medias/sys_master/root/20230908/ufVP/64fb203bafa4cf41f5d31b33/-286Wx359H-466550462-black-MODEL.jpg",
  },
  {
    id: 7,
    category: "Sneakers Shoes",
    img: "https://assets.ajio.com/medias/sys_master/root/20230908/ufVP/64fb203bafa4cf41f5d31b33/-286Wx359H-466550462-black-MODEL.jpg",
  },
  {
    id: 8,
    category: "Sneakers Shoes",
    img: "https://assets.ajio.com/medias/sys_master/root/20230908/ufVP/64fb203bafa4cf41f5d31b33/-286Wx359H-466550462-black-MODEL.jpg",
  },
];

const ProductCategory = () => {
  return (
    <div className="max-w-[1580px] mx-auto sm:px-6 px-4 group">
      {items.map((item) => {
        console.log(item.img);
        return (
          <div key={item.id}>
            <p>{item.category}</p>
            <img src={item.img} alt="sss" />
          </div>
        );
      })}
      <div>Hello</div>
    </div>
  );
};

export default ProductCategory;
