import React, { useEffect, useState } from "react";
import TableReservationTable from "../components/TableReservationTable";
import Navbar from "../components/Navbar";
import axios from "axios";

const TableReservations = () => {
  const [reservations, setReservations] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/table-reservations")
      .then((res) => {
        console.log(res.data);
        setReservations(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <TableReservationTable users={reservations} />
      <button onClick={() => console.log(reservations)}>Ok</button>
    </div>
  );
};

export default TableReservations;
