import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (event) => {
    console.log(event.target.value);
  };
  const emailHandler = (event) => {
    console.log(event.target.value);
  };
  const passwordHandler = (event) => {
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    axios
      .post("http://localhost:4000/api/users", {
        email: "user@example.com",
        password: "strongpassword",
        username: "user123",
        role: "admin",
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
            <label htmlFor="password">Email</label>
            <input
              type="password"
              placeholder="kushan@gmail.com"
              name="password"
              onChange={passwordHandler}
              className="form-control rounded-0"
            />
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
