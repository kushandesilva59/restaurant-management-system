import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "../assets/css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const LoginUser = () => {
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users/loggedin")
      .then((res) => {
        console.log(res);

        if (res.data.valid) {
          if (res.data.user.role === "STAFF") {
            console.log(res.data);
            navigate("/staff");
          } else if (res.data.user.role === "CUSTOMER") {
            navigate("/");
          } else if (res.data.user.role === "ADMIN") {
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const loginHandler = (e) => {
    e.preventDefault();

    console.log(formValues);

    axios
      .post("http://localhost:4000/api/users/login", {
        email: formValues.email,
        password: formValues.password,
      })
      .then((res) => {
        console.log(res.data); // Handle the response data

        toast.success("Login Success", {
          onClose: () => {
            if (res.data.user.role === "STAFF") {
              console.log(res.data);
              navigate("/staff");
            } else if (res.data.user.role === "CUSTOMER") {
              navigate("/");
            } else if (res.data.user.role === "ADMIN") {
            }
          },
        });
      })
      .catch((error) => {
        console.error("Error posting data:", error); // Handle errors
        toast.error("Login Failed");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form>
              <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formValues.email}
                className="login-input"
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={formValues.password}
                  className="login-input"
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button onClick={loginHandler}>Log In</button>
                <button type="button" className="google-button">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginUser;
