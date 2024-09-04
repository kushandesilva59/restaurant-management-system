import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Nawbar from "./components/Nawbar";
import Login from "./pages/Login";
import CustomerDashboard from "./pages/CustomerDashboard";
import SignupUser from "./pages/SignupUser";
import LoginUser from "./pages/LoginUser";
import StaffDashboard from "./pages/StaffDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nawbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/signup" element={<SignupUser />} />

            <Route path="/login" element={<LoginUser />} />

            <Route path="/customer" element={<CustomerDashboard />} />

            <Route path="/staff" element={<StaffDashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
