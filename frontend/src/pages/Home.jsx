import React from "react";

import HomeWrap1 from "../components/homeWrap/HomeWrap1";
import ProductCategory from "../components/products/ProductCategory";
import UpperCategory from "../components/homeWrap/UpperCategory";

const Home = () => {
  return (
    <div>
      <HomeWrap1 />
      <UpperCategory />
      {/* <ProductCategory /> */}
    </div>
  );
};

export default Home;
