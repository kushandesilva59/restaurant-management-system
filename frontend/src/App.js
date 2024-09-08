import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Nawbar from "./components/Nawbar";
import Login from "./pages/Login";
import CustomerDashboard from "./pages/CustomerDashboard";
import SignupUser from "./pages/SignupUser";
import LoginUser from "./pages/LoginUser";
import StaffDashboard from "./pages/StaffDashboard";
import MenuPage from "./pages/MenuPage";
import PaymentPage from "./pages/PaymentPage";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nawbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<CustomerDashboard />} />

            <Route path="/signup" element={<SignupUser />} />

            <Route path="/login" element={<LoginUser />} />

            
            <Route path="/staff" element={<StaffDashboard />} />


            <Route path="/menu" element={<MenuPage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
