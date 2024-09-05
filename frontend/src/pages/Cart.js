import React from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import styles from "./cart.css"



export const Cart = () => {
  const [order, setOrder] = "";
  const navigate = useNavigate();

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h1></h1>;

  const saveOrder = () => {
   
        const details = [];

        for (const item of items) {
        //   console.log(item.id);

          const detail = {
            itemName: item.title,
            quantity: item.quantity,
            price: item.itemTotal,
          };

          details.push(detail);
        }

        console.log(items)

      
    ;
  };

  return (
    <section className="cart">
      <div>
        <h2 className="title">Cart</h2>

        <div className="top-cart">
          {/* <h5>Cart {totalUniqueItems} total Items : {totalItems}</h5> */}
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>- Quantity</th>
                <th>+ Quantity</th>
                <th>Remove Item</th>
              </tr>
            </thead>

            <tbody>
              {items.map((product, index) => {
                return (
                  <tr
                    key={index}
                    style={{ "Border-bottom": "4px solid black" }}
                  >
                    <td>
                      <img
                        src={product.img}
                        alt=""
                        style={{ height: "6rem", width: "auto" }}
                      />
                    </td>
                    <td>{product.title}</td>
                    <td>$ {product.price}</td>
                    <td> {product.quantity}</td>

                    <td>
                      <button
                        className="minusBtn"
                        onClick={() =>
                          updateItemQuantity(product.id, product.quantity - 1)
                        }
                      >
                        -
                      </button>
                    </td>

                    <td>
                      <button
                        className="plussBtn"
                        onClick={() =>
                          updateItemQuantity(product.id, product.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </td>

                    <td>
                      {" "}
                      <button
                        className="removeBtn"
                        onClick={() => removeItem(product.id)}
                      >
                        Remove Item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="bottom-cart">
          <div>
            <h2>Total Price : $ {cartTotal}</h2>
          </div>

          <div>
            <button className="clearBtn" onClick={() => emptyCart()}>
              Clear Cart
            </button>
            <button className="buyBtn" onClick={saveOrder}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
