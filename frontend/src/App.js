import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import CustomerDashboard from "./pages/CustomerDashboard";
import SignupUser from "./pages/SignupUser";
import LoginUser from "./pages/LoginUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/signup" element={<SignupUser />} />

            <Route path="/login" element={<LoginUser />} />

            <Route path="/loggedin" element={<CustomerDashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
