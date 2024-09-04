import axios from "axios";
import myImage from "../assets/images/image.jpg";
import myImage2 from "../assets/images/meal.jpg";
import { useEffect, useState } from "react";

const CustomerDashboard = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users/loggedin")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="customer-page">
      <div className="hero-section">
        <div className="image-wrapper">
          <img src={myImage2} alt="background-image" />
        </div>
        <div className="container">
          <div className="hero-article-wrapper">
            <h4>KUSH's Place</h4>

            <button>SEE MENU</button>
          </div>

          <div className="form-wrapper">
            <div className="title-wrapper">
              <h6>Save Time, Tasty Foods.</h6>
            </div>

            <form className="booking-form">
              <div className="form-row">
                <div className="form-item">
                  <label>Date</label>
                  <input
                    type="date"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>

                <div className="form-item">
                  <label>Time</label>
                  <input
                    type="time"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>

                <div className="form-item">
                  <label>Party Size</label>
                  <input
                    type="number"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-item">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>

                <div className="form-item">
                  <label>Email</label>
                  <input
                    type="email"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-item">
                  <label>Plans For</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-item">
                  <label>Any Special Request?</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>

              <button>Reserve a Table</button>
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
                <h6>Are you looking to</h6>
                <h5>Get Translation done?</h5>
                <button>BOOK A TABLE</button>
              </div>
            </div>

            <div className="card">
              <div className="image-wrapper">
                <img src={myImage} alt="Description" />
              </div>

              <div className="text-wrapper">
                <h6>Are you looking to</h6>
                <h5>Get Translation done?</h5>
                <button>GET STARTED</button>
              </div>
            </div>

            <div className="card">
              <div className="image-wrapper">
                <img src={myImage} alt="Description" />
              </div>

              <div className="text-wrapper">
                <h6>Are you looking to</h6>
                <h5>Get Translation done?</h5>
                <button>GET STARTED</button>
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
            <h6>WELCOME TO GLP TRANSLATIONS</h6>

            <h5>YOUR TRUSTED PARTNER FOR ALL YOUR TRAVEL NEEDS</h5>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt
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
