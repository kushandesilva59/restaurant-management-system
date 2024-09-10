import Navbar from "../components/Navbar";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../assets/css/staff.css'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";



const StaffDashboard = () => {

  useEffect(()=>{
    axios
      .get("http://localhost:4000/api/users/loggedin",{ withCredentials: true })
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
  },[])

  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="staff-main">
        <div
          className="staff-box"
          onClick={() => navigate("/table-reservations")}
        >
          <FontAwesomeIcon icon={faCoffee} />
          <h1>Table bookings</h1>
        </div>
        <div
          className="staff-box"
          onClick={() => navigate("/delivery-reservations")}
        >
          <FontAwesomeIcon icon={faCoffee} />
          <h1>Delivery Reservations</h1>
        </div>
        <div className="staff-box">
          <FontAwesomeIcon icon={faCoffee} />
          <h1>New Queries</h1>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
