import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    console.log(e);
    setEmail(e);
  };
  const passwordHandler = (e) => {
    console.log(e);
    setPassword(e);
  };

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  
  const loginHandler = () => {
    console.log(email, password);

    axios
      .post("http://localhost:4000/api/users/login", {
        email: email,
        password: password,
        role: "customer",
      })
      .then((response) => {
        console.log(response); // Handle the response data
        navigate("/");
      })
      .catch((error) => {
        console.error("Error posting data:", error); // Handle errors
      });
  };

  return (
    <div>
      Login
      <form >
        <input
          type="email"
          onChange={(e) => emailHandler(e.target.value)}
          value={email}
        />
        <input
          type="password"
          onChange={(e) => passwordHandler(e.target.value)}
          value={password}
        />

        <button type="button" onClick={loginHandler}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
