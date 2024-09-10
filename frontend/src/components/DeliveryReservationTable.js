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
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
  const [editedOrderValues, setEditedOrderValues] = useState({
    productName: "",
    quantity: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(
    formData.status || "Select meals"
  );
  const [statusOptions, setStatusOptions] = useState([]);
  const [quantity, setQuantity] = useState([]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // const handleStatusSelect = (item) => {
  //   console.log(item.quantity);
  //   setSelectedStatus(item.productName);
  //   setQuantity(item.quantity);
  //   handleChange({ target: { name: "status", value: item.productName } }); // Update formData
  // };

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

  const editQuantity = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    setStatusOptions((prevStatusOptions) =>
      prevStatusOptions.map((item) =>
        item.productName === name
          ? { ...item, quantity: parseInt(value, 10) || 0 } // Update quantity for matching productName
          : item
      )
    );
  };

  function handleEdit(row) {
    setSelectedRow(row);
    console.log(row.orderDetails);

    const newArray = row.orderDetails.map((item) => ({
      productName: item.productName,
      quantity: item.quantity,
    }));

    console.log(newArray);
    setStatusOptions(newArray);

    // const statuses = new Set(
    //   row.orderDetails.map((orderDetail) => orderDetail.productName)
    // );
    // setStatusOptions(Array.from(statuses));

    // console.log(statusOptions);

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
    console.log('Updated Order details : ',statusOptions)
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

            <div className="d-flex justify-content-between">
              <FormGroup>
                <Label for="status">Order Details</Label>
                {/* <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                  <DropdownToggle caret>{selectedStatus}</DropdownToggle>
                  <DropdownMenu>
                   
                    {statusOptions.map((item, index) => (
                      <DropdownItem
                        key={index}
                        onClick={() => handleStatusSelect(item)}
                      >
                        {item.productName}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown> */}

                {statusOptions.map((item, index) => (
                  <div key={index}>
                    {item.productName}

                    <Input
                      type="number"
                      id="qty"
                      name={`${item.productName}`}
                      // value={item.quantity}
                      value={item.quantity !== undefined ? item.quantity : 0}
                      onChange={editQuantity}
                    />
                  </div>
                ))}

                {statusOptions.map((item, index) => (
                  <div key={index}>
                    <Label>{item.productName}</Label>
                    <Input
                      type="number"
                      name={item.productName} // Dynamically set the name to productName
                      value={item.quantity !== undefined ? item.quantity : 0} // Handle undefined quantities
                      onChange={editQuantity} // Update quantity on change
                    />
                  </div>
                ))}
              </FormGroup>
              <FormGroup>
                <Label for="name">Quantity</Label>
                <Input
                  type="number"
                  id="qty"
                  name="qty"
                  value={
                    editedOrderValues.quantity
                      ? editedOrderValues.quantity
                      : quantity
                  }
                  onChange={handleChange}
                />
              </FormGroup>
            </div>
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
