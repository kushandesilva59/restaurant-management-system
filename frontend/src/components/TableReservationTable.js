

import React, { useEffect } from "react";
import "./TableComponent.css"; // Import the CSS file
const TableReservationTable = ({ users }) => {
  useEffect(() => {
    console.log(users);
  }, [users]);

  function handleEdit(row) {
    console.log("Edit row:", row);
  }

  // Safeguard in case users is undefined or not an array
  if (!Array.isArray(users)) {
    return <div>No data available</div>;
  }

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Date</th>
          <th>Time</th>
          <th>Guest Count</th>
          <th>Special Request</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {users.map((row, index) => (
          <tr key={index}>
            <td>{row.username}</td>
            <td>{row.userEmail}</td>
            <td>{row.date}</td>
            <td>{row.time}</td>
            <td>{row.guestCount}</td>
            <td>{row.specialRequest ? row.specialRequest : "Nothing"}</td>
            <td>
              <button onClick={() => handleEdit(row)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableReservationTable;
