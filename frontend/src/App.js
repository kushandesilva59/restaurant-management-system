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
import TableReservations from "./pages/TableReservations";
import DeliveryReservations from "./pages/DeliveryReservations";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<CustomerDashboard />} />

            <Route path="/signup" element={<SignupUser />} />

            <Route path="/login" element={<LoginUser />} />

            <Route path="/staff" element={<StaffDashboard />} />

            <Route path="/menu" element={<MenuPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/table-reservations" element={<TableReservations />} />
            <Route
              path="/delivery-reservations"
              element={<DeliveryReservations />}
            />

            <Route path="/destination" element={<Test/>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
