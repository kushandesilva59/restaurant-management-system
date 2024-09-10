import React from "react";
import { useState, useEffect } from "react";
import style from "./payment.css";
import cardImg from "../assets/images/card_img.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


const PaymentPage = () => {
  const location = useLocation();
  const { tablebook } = location.state || {}; // Access the passed data

  const { delivery } = location.state || {}; // Access the passed data

  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    address: "",
    expmonth: "",
    state: "",
    zipcode: "",
    cardname: "",
    cardnumber: "",
    expyear: "",
    contact: "",
    cvv: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formValues);
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formErrors);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.address) {
      errors.address = "Address is required";
    }
    if (!values.expmonth) {
      errors.expmonth = "Expire month is required";
    }
    if (!values.expyear) {
      errors.expyear = "Expire year is required";
    }
    if (!values.state) {
      errors.state = "State is required";
    }
    if (!values.cardname) {
      errors.cardname = "Card name is required";
    }
    if (!values.cardnumber) {
      errors.cardnumber = "Card number is required";
    }
    if (!values.contact) {
      errors.contact = "Contact number is required";
    }
    if (!values.zipcode) {
      errors.zipcode = "Zip code is required";
    }
    if (!values.cvv) {
      errors.cvv = "CVV is required";
    }

    return errors;
  };

  useEffect(() => {
    console.log(tablebook);
    console.log(delivery);
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);

      console.log("okii");
      console.log(typeof delivery === "undefined");
      //API CALL
      if (typeof delivery != "undefined") {
        console.log(delivery.total);
        console.log(delivery.items);

        const orderDetails = delivery.items.map((person, index) => {
          return {
            productName: person.title, // renaming or transforming keys
            unitPrice: person.price,
            quantity: person.quantity,
            isAdult: person.age >= 18, // adding a new field based on logic
            itemTotal: person.itemTotal,
          };
        });

        console.log(orderDetails);

        if (orderDetails) {
          console.log("hariytma harii");

          //after all process API call
          axios
            .post("http://localhost:4000/api/delivery-reservations/reserve", {
              name: formValues.name,
              email: formValues.email,
              phoneNumber: "0778643245",
              address: formValues.address,
              city: "Colombo",
              state: formValues.state,
              zipCode: formValues.zipcode,
              orderDetails: orderDetails,
              totalPrice: delivery.total,
              orderComplete: false,
            })
            .then((res) => {
              console.log(res.status === 200);

              if (res.status === 200) {
                navigate("/menu", { state: { ordersaved: true } });
                //navigate("/customer/login");
                // toast.info("Wait...", {
                //   onClose: () => {
                //     showAlert();
                //   },
                // });

                //passe mekath blnna
                //console.log('ekath harii',res.data.valid)
              } else {
              }
            })
            .catch((err) => console.log(err));
        }
      }else if (typeof tablebook != "undefined") {
        console.log(tablebook);

        axios
          .post(
            "http://localhost:4000/api/table-reservations/reserve",
            tablebook
          )
          .then((res) => {
            console.log(res)
    
            Swal.fire({
              title: "Table booking successfully!",
              text: "Table will be reserved!",
              icon: "success",
              confirmButtonText: "OK",
            }).then((result) => {
              if (result.isConfirmed) {
                 navigate("/");
              }
            });
          })
          .catch((err) => console.log(err));
      }
    }
  }, [formErrors, formValues, isSubmit]);

  return (
    <div className="payment-section">
      <div className="payment-container">
        <form>
          <div className="payment-row">
            <div className="column">
              <h3 className="payment-title">Billing Address</h3>
              <div className="input-box">
                <span>Name:</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Kushan De SIlva"
                  value={formValues.name}
                  onChange={handleChange}
                />
                <p>{formErrors.name}</p>
              </div>

              <div className="input-box">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p>{formErrors.email}</p>
              </div>

              <div className="input-box">
                <span>Address :</span>
                <input
                  type="text"
                  name="address"
                  placeholder="No. 15, Mathugama Road, Aluthgama"
                  value={formValues.address}
                  onChange={handleChange}
                />
                <p>{formErrors.address}</p>
              </div>

              <div className="input-box">
                <span>Exp. Year :</span>
                <input
                  type="number"
                  name="expyear"
                  placeholder="2025"
                  value={formValues.expyear}
                  onChange={handleChange}
                />
                <p>{formErrors.expyear}</p>
              </div>

              <div className="flex">
                <div className="input-box">
                  <span>State :</span>
                  <input
                    type="text"
                    name="state"
                    placeholder="Sri Lanka"
                    value={formValues.state}
                    onChange={handleChange}
                  />
                  <p>{formErrors.state}</p>
                </div>

                <div className="input-box">
                  <span>Zip Code :</span>
                  <input
                    type="number"
                    name="zipcode"
                    placeholder="123 456"
                    value={formValues.zipcode}
                    onChange={handleChange}
                  />
                  <p>{formErrors.zipcode}</p>
                </div>
              </div>
            </div>

            <div className="column">
              <h3 className="payment-title">Payment</h3>
              <div className="input-box">
                <span>Card accepted:</span>
                <img src={cardImg} alt="description" />
              </div>

              <div className="input-box">
                <span>Name On Card</span>
                <input
                  type="text"
                  name="cardname"
                  placeholder="Credit Card"
                  value={formValues.cardname}
                  onChange={handleChange}
                />
                <p>{formErrors.cardname}</p>
              </div>

              <div className="input-box">
                <span>Credit Card Number :</span>
                <input
                  type="number"
                  name="cardnumber"
                  placeholder="1234 1234 1234 1234"
                  value={formValues.cardnumber}
                  onChange={handleChange}
                />
                <p>{formErrors.cardnumber}</p>
              </div>

              <div className="input-box">
                <span>Exp. Month :</span>
                <input
                  type="text"
                  name="expmonth"
                  placeholder="August"
                  value={formValues.expmonth}
                  onChange={handleChange}
                />
                <p>{formErrors.expmonth}</p>
              </div>

              <div className="flex">
                <div className="input-box">
                  <span>Contact Number:</span>
                  <input
                    type="text"
                    name="contact"
                    placeholder="+94 77 654 4456"
                    value={formValues.contact}
                    onChange={handleChange}
                  />
                  <p>{formErrors.contact}</p>
                </div>

                <div className="input-box">
                  <span>CVV :</span>
                  <input
                    type="number"
                    name="cvv"
                    placeholder="123"
                    value={formValues.cvv}
                    onChange={handleChange}
                  />
                  <p>{formErrors.cvv}</p>
                </div>
              </div>
            </div>
          </div>

          <button type="button" onClick={submitHandler}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
