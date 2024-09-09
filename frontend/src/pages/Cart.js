import React, { useEffect } from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import styles from "./cart.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

export const Cart = () => {


  useEffect(() => {
    console.log(ordersaved);

    if(ordersaved){
      console.log('Kushan De')
      emptyCart()
      navigate('/')
    }
  }, []);

  const location = useLocation();
  const [order, setOrder] = "";
  const navigate = useNavigate();

  const { ordersaved } = location.state || {}; // Access the passed data

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

  const saveOrder = async () => {
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

    console.log(items);
    console.log(cartTotal);

    const order = {
      items: items,
      total: cartTotal,
    };

    // const loggedin = await axios
    //   .get("http://localhost:4000/api/users/loggedin")
    //   .then((res) => {
    //     console.log(res);

    //     if (!res.data.valid) {
    //       //navigate("/customer/login");
    //       // toast.info("Wait...", {
    //       //   onClose: () => {
    //       //     showAlert();
    //       //   },
    //       // });
    //     } else {
    //     }
    //   })
    //   .catch((err) => console.log(err));

    // console.log(loggedin);

    try {
      const loggedin = await axios.get(
        "http://localhost:4000/api/users/loggedin"
      );
      console.log("First response:", loggedin.data);

      if (loggedin.data.valid) {
        console.log("okiiii");
        console.log(loggedin.data.user);
        console.log(order.items);

        navigate("/payment", { state: { delivery: order } });

        // axios
        //   .get("http://localhost:4000/api/delivery-reservations/reserve", {
        //     name: "kushan",
        //     email: "kushan@gmail.com",
        //     phoneNumber: "0778643245",
        //     address: "Aluthgama",
        //     city: "Colombo",
        //     state: "no state",
        //     zipCode: "12080",
        //     orderDetails: [
        //       {
        //         productName: "Those",
        //         quantity: 2,
        //         price: 120,
        //       },
        //     ],
        //     totalPrice: 240,
        //   })
        //   .then((res) => {
        //     console.log(res);

        //     if (!res.data.valid) {
        //       //navigate("/customer/login");
        //       // toast.info("Wait...", {
        //       //   onClose: () => {
        //       //     showAlert();
        //       //   },
        //       // });
        //     } else {
        //     }
        //   })
        //   .catch((err) => console.log(err));
      } else {
        showAlert();
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const showAlert = () => {
    Swal.fire({
      title: "You Should log into the system!",
      text: "Already have an account?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I have!",
      cancelButtonText: "No, I haven't!",
    }).then((result) => {
      if (result.isConfirmed) {
        //Swal.fire("Deleted!", "Your file has been deleted.", "success");
        navigate("/login");
      } else {
        navigate("/signup");
      }
    });
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
      <ToastContainer />
    </section>
  );
};
