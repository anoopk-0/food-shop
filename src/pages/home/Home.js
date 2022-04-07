import React, { useRef } from "react";
import { Banner, CartCountButton, Footer, Menu } from "../../components";
import { menuItemsData } from "../../components/menu/fixture";

import "./style.css";

const Home = () => {
  const menuRef = useRef();

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
      <Menu list={menuItemsData} ref={menuRef} />
      <Footer />
      <CartCountButton />
    </div>
  );
};

export default Home;
