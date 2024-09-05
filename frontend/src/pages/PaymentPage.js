import React from "react";
import { useState } from "react";
import style from "./payment.css";
import cardImg from "../assets/images/card_img.png";

const PaymentPage = () => {
  const initialValues = {
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    cardname: "",
    cardnumber: "",
    expmonth: "",
    contact: "",
    cvv: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = () => {
    console.log(formValues);
  };

  return (
    <div className="payment-section">
      <div className="payment-container">
        <form>
          <div className="payment-row">
            <div className="column">
              <h3 className="payment-title">Billing Address</h3>
              <div className="input-box">
                <span>Full Name:</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Kushan De SIlva"
                  value={formValues.name}
                  onChange={handleChange}
                />
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
              </div>

              <div className="input-box">
                <span>City :</span>
                <input
                  type="text"
                  name="city"
                  placeholder="Aluthgama"
                  value={formValues.city}
                  onChange={handleChange}
                />
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
