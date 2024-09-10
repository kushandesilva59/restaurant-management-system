import { useState, useEffect } from "react";
// import "../assets/css/signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupUser = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users/loggedin")
      .then((res) => {
        console.log(res);

        if (res.data.valid) {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));

    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);

      sendApi();
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Those passwords didn’t match. Try again.";
    }

    return errors;
  };

  const navigateToSignup = () => {
    navigate("/login");
  };

  const sendApi = () => {
    console.log("Okay");

    axios
      .post("http://localhost:4000/api/users", {
        email: formValues.email,
        password: formValues.password,
        confirmPassword: formValues.confirmPassword,
        username: formValues.username,
        role: formValues.role,
      })
      .then((response) => {
        console.log(response.data); // Handle the response data
      })
      .catch((error) => {
        console.error("Error posting data:", error); // Handle errors
        setIsSubmit(false);
      });
  };

  return (
    <div className="d-flex">
      <div className="bgImg"></div>
      <div className="container bg-white p-3 rounded w-25">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          console.log("Entered Details", formValues)
        )}

        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>

          <div className="ui form">
            <div className="field mb-3">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Choose a username"
                value={formValues.username}
                onChange={handleChange}
                className="form-control rounded-0"
              />
            </div>
            <p>{formErrors.username}</p>
            <div className="field mb-3">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
                className="form-control rounded-0"
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
                className="form-control rounded-0"
              />
            </div>
            <p>{formErrors.password}</p>
            <div className="field mb-3">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formValues.confirmPassword}
                onChange={handleChange}
                className="form-control rounded-0"
              />
            </div>
            <p>{formErrors.confirmPassword}</p>

            <label>
              <input
                type="radio"
                name="role"
                value="CUSTOMER"
                onChange={handleChange}
             
              />
              Customer
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="STAFF"
                onChange={handleChange}
               
              />
              Staff
            </label>
            <button className="fluid ui login-button blue">Submit</button>
          </div>
        </form>
        <div className="text" onClick={navigateToSignup}>
          Already have an account? <span>Login</span>
        </div>
      </div>{" "}
    </div>
  );
};

export default SignupUser;
