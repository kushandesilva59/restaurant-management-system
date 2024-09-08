import axios from "axios";
import myImage from "../assets/images/image.jpg";
import myImage2 from "../assets/images/meal.jpg";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

const CustomerDashboard = () => {
  const initValues = {
    username: "",
    userEmail: "",
    date: "",
    time: "",
    guestCount: "",
    specialReq: "",
  };

  const [values, setValues] = useState(initValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValues({ ...values, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    setFormErrors(validate(values));
    const form = isFormComplete();
    console.log(form);
    setIsSubmit(true);

    // check if user logged in

    if (isFormComplete()) {
      axios
        .get("http://localhost:4000/api/users/loggedin")
        .then((res) => {
          console.log(res);

          if (!res.data.valid) {
            //navigate("/customer/login");

            showAlert();
          } else {
            axios
              .post("http://localhost:4000/api/table-reservations/reserve",values)
              .then((res) => {
                console.log(res);
                Swal.fire({
                  title: "Table booking successfully!",
                  text: "You clicked the button!",
                  icon: "success",
                });
                
              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    }

    
  };

  const isFormComplete = () => {
    console.log(values);

    const { specialReq, ...restFields } = values;

    return Object.values(restFields).every((value) => value.trim() !== "");
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

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.userEmail) {
      errors.userEmail = "Email is required!";
    } else if (!regex.test(values.userEmail)) {
      errors.userEmail = "This is not a valid email format!";
    }
    if (!values.date) {
      errors.date = "Date is required";
    }
    if (!values.time) {
      errors.time = "Time is required";
    }
    if (!values.guestCount) {
      errors.guestCount = "Count is required";
    }

    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(initValues);
    }
  }, [formErrors, initValues, isSubmit]);

  return (
    <div className="customer-page">
      <div className="hero-section">
        <div className="image-wrapper">
          <img src={myImage2} alt="background-image" />
        </div>
        <div className="container">
          <div className="hero-article-wrapper">
            <h4>Where International Cuisine Meets Serene Ambiance</h4>

            <button>SEE MENU</button>
          </div>

          <div className="form-wrapper">
            <div className="title-wrapper">
              <h4>Save your valuable time</h4>
              <h6>
                SEND US A MESSAGE AND One of our representative will get back to
                you ASAP
              </h6>
            </div>

            <form className="booking-form">
              <div className="form-row">
                <div className="form-item">
                  <label>Date</label>
                  <input
                    type="date"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                  <p>{formErrors.date}</p>
                </div>

                <div className="form-item">
                  <label>Time</label>
                  <input
                    type="time"
                    name="time"
                    value={values.time}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                  <p>{formErrors.time}</p>
                </div>
              </div>

              <div className="form-row">
                <div className="form-item">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    placeholder="Kamal de silva"
                  />
                  <p>{formErrors.username}</p>
                </div>

                <div className="form-item">
                  <label>Party Size</label>
                  <input
                    type="number"
                    name="guestCount"
                    value={values.guestCount}
                    onChange={handleChange}
                    placeholder="4"
                  />
                  <p>{formErrors.guestCount}</p>
                </div>
              </div>

              <div className="form-row">
                <div className="form-item">
                  <label>Email</label>
                  <input
                    type="email"
                    name="userEmail"
                    value={values.userEmail}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                  <p>{formErrors.userEmail}</p>
                </div>
              </div>

              <div className="form-row">
                <div className="form-item">
                  <label>Any Special Request?</label>
                  <input
                    type="text"
                    name="specialReq"
                    value={values.specialReq}
                    onChange={handleChange}
                    placeholder="Name"
                    className="special-input"
                  />
                </div>
              </div>

              <div className="button-wrapper">
                <button type="button" onClick={handleSubmit}>
                  Reserve a Table
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container collection-container">
        <div className="image-set">
          <div className="card-set">
            <div className="card">
              <div className="image-wrapper">
                <img src={myImage} alt="Description" />
              </div>

              <div className="text-wrapper">
                <h6>Are you looking for</h6>
                <h5>Breakfast</h5>
                <button onClick={() => navigate("/menu")}>SEE MENU</button>
              </div>
            </div>

            <div className="card">
              <div className="image-wrapper">
                <img src={myImage} alt="Description" />
              </div>

              <div className="text-wrapper">
                <h6>Are you looking for</h6>
                <h5>Lunch</h5>
                <button onClick={() => navigate("/menu")}>SEE MENU</button>
              </div>
            </div>

            <div className="card">
              <div className="image-wrapper">
                <img src={myImage} alt="Description" />
              </div>

              <div className="text-wrapper">
                <h6>Are you looking for</h6>
                <h5>Shakes</h5>
                <button onClick={() => navigate("/menu")}>SEE MENU</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-and-article-wrapper">
        <div className="container">
          <div className="image-wrapper">
            <img src={myImage2} alt="Description" />
          </div>

          <div className="article-wrapper">
            <h6>OUR STORY</h6>

            <h5>From Local Favorite to International Cuisine Destination</h5>

            <p>
              ABC Restaurant and Bar is more than just a place to eat – it's a
              dining experience that combines quality food, exceptional service,
              and a stunning location. Our commitment to serving international
              cuisine reflects our passion for exploring different cultures and
              flavors, and our dedication to providing a diverse and exciting
              menu for our customers. But it's not just about the food – our
              ambiance, with its tranquil setting beside the Bentota River,
              offers a peaceful escape from the hustle and bustle of everyday
              life. Come and see for yourself why ABC Restaurant is one of the best
              restaurants in Aluthgama, Sri Lanka.
            </p>

            <button>READ MORE ABOUT US</button>
          </div>
        </div>
      </div>

      <div className="services">
        <div>
          <h6>WHAT WE DO</h6>
          <h5></h5>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
