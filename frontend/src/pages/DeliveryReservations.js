import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import DeliveryReservationTable from "../components/DeliveryReservationTable";

const DeliveryReservations = () => {
  const [reservations, setReservations] = useState({});


  useEffect(() => {
    axios
      .get("http://localhost:4000/api/delivery-reservations")
      .then((res) => {
        console.log(res.data);
        setReservations(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <DeliveryReservationTable users={reservations} />
      <button onClick={() => console.log(reservations)}>Ok</button>
    </div>
  );
};

export default DeliveryReservations;
