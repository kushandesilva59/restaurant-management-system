import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users/loggedin")
      .then((res) => {
        console.log(res);

        if (res.data.valid) {
          navigate("/");
        }else{
          console.log("Not log in")
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (event) => {
    console.log(event.target.value);

    setUsername(event.target.value);
  };
  const emailHandler = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    axios
      .post("http://localhost:4000/api/users", {
        email: email,
        password: password,
        username: username,
        role: "customer",
      })
      .then((response) => {
        console.log(response.data); // Handle the response data
      })
      .catch((error) => {
        console.error("Error posting data:", error); // Handle errors
      });

    console.log(event.target.value);
  };

  return (
    <div className="d-flex justify-content-center">
      signup
      <div className="bg-white p-3 rounded w-25">
        <form>
          <div className="mb-3">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="Kushan de silva"
              name="name"
              onChange={usernameHandler}
              className="form-control rounded-0"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="kushan@gmail.com"
              name="email"
              onChange={emailHandler}
              className="form-control rounded-0"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="kushan@gmail.com"
              name="password"
              onChange={passwordHandler}
              className="form-control rounded-0"
            />
          </div>

          <div className="mb-3">
            <div>
              <label htmlFor="staff">Staff</label>
              <input type="checkbox" name="staff" radioGroup="grp" />
            </div>

            <div>
              <label htmlFor="customer">Customer</label>
              <input type="checkbox" name="customer" radioGroup="grp" />
            </div>
          </div>

          <button type="button" onClick={submitHandler}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
