// import React, { useEffect, useState } from "react";
// import "./TableComponent.css"; // Import the CSS file
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const DeliveryReservationTable = ({ users }) => {
//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

//   useEffect(() => {
//     console.log(users);
//   }, [users]);

//   function handleEdit(row) {
//     console.log("Edit row:", row);
//   }

//   // Safeguard in case users is undefined or not an array
//   if (!Array.isArray(users)) {
//     return <div>No data available</div>;
//   }

//   return (
//     <table className="styled-table">
//       <thead>
//         <tr>
//           <th>Username</th>
//           <th>Email</th>
//           <th>Phone Number</th>
//           <th>Address</th>
//           <th>Total Price</th>
//           <th>Option</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((row, index) => (
//           <tr key={index}>
//             <td>{row.name}</td>
//             <td>{row.email}</td>
//             <td>{row.phoneNumber}</td>
//             <td>{row.address}</td>
//             <td>${row.totalPrice}</td>
//             <td>
//               <button onClick={() => handleEdit(row)}>View Details</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>

//       <Modal isOpen={modal} toggle={toggle}>
//         <ModalHeader toggle={toggle}>Modal Title</ModalHeader>
//         <ModalBody>
//             <h6>Order Details</h6>

//         </ModalBody>
//         <ModalFooter>
//           <Button color="secondary" onClick={toggle}>
//             Close
//           </Button>
//           <Button color="primary" onClick={toggle}>
//             Save Changes
//           </Button>
//         </ModalFooter>
//       </Modal>

//       <Button color="primary" onClick={toggle}>
//         Open Modal
//       </Button>
//     </table>
//   );
// };

// export default DeliveryReservationTable;

import React, { useState, useEffect } from "react";
import "./TableComponent.css";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DeliveryReservationTable = ({ users }) => {
  const [modal, setModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    totalPrice: "",
  });

  const toggle = () => setModal(!modal);

  useEffect(() => {
    if (selectedRow) {
      // Update formData when selectedRow changes
      setFormData({
        name: selectedRow.name,
        email: selectedRow.email,
        phoneNumber: selectedRow.phoneNumber,
        address: selectedRow.address,
        totalPrice: selectedRow.totalPrice,
      });
    }
  }, [selectedRow]);

  function handleEdit(row) {
    setSelectedRow(row);
    toggle(); // Open modal when a row is selected
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission (e.g., update the user data)
    console.log("Updated data:", formData);
    toggle(); // Close the modal after submission
  }

  // Safeguard in case users is undefined or not an array
  if (!Array.isArray(users)) {
    return <div>No data available</div>;
  }

  return (
    <>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Total Price</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {users.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phoneNumber}</td>
              <td>{row.address}</td>
              <td>${row.totalPrice}</td>
              <td>
                <Button color="primary" onClick={() => handleEdit(row)}>
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Order Details</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <FormGroup>
              <Label for="name">Username</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phoneNumber">Phone Number</Label>
              <Input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="totalPrice">Total Price</Label>
              <Input
                type="number"
                id="totalPrice"
                name="totalPrice"
                value={formData.totalPrice}
                onChange={handleChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Close
            </Button>
            <Button color="primary" type="submit">
              Save Changes
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default DeliveryReservationTable;
