import React, { forwardRef } from "react";
import MenuItems from "../menu-items/MenuItems";
import "./style.css";

const Menu = forwardRef(({ list }, ref) => (
  <main ref={ref}>
    {list.map((item) => (
      <MenuItems key={item.id} item={item} />
    ))}
  </main>
));

export default Menu;
