import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { CartProvider } from "react-use-cart";
import { Cart } from "./Cart";
import axios from "axios";





const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  // useEffect(()=>{
  //    axios
  //      .get("http://localhost:4000/api/users/loggedin")
  //      .then((res) => {
  //        console.log(res);
  //      })
  //      .catch((err) => console.log(err));
  // },[])


  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />

        <CartProvider>
          <Menu items={menuItems} />
          <Cart/>
        </CartProvider>
      </section>
    </main>
  );
};

export default MenuPage;
