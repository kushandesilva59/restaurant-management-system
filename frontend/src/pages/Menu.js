import React from "react";
import { useCart } from "react-use-cart";

const Menu = ({ items }) => {
  const handleClick = (e) => {
    console.log(e);
  };

  const { addItem } = useCart();
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <div className="header">
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </div>
              <p className="item-text">{desc}</p>
              <button
                onClick={() => {
                  addItem(item);
                }}
              >
                Add to cart
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
