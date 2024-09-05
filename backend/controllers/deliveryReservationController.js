const mongoose = require("mongoose");
const DeliveryReservation = require("../models/deliveryresrvationModel");

const getDeliveryReservations = async (req, res) => {
  const reservations = await DeliveryReservation.find({}).sort({
    createdAt: -1,
  });
  console.log("me tyene", reservations);

  //   if (reservations.length === 0) {
  //     res.json({ message: "No reservations :)" });
  //   } else {
  //     res.status(200).json(reservations);
  //   }

  res.status(200).json(reservations);
};

const createDeliveryReservation = async (req, res) => {
  const { name, email, phoneNumber, address, city, state, zipCode, orderDetails, totalPrice } = req.body;

  // const reservation = await TableReservation.findOne({ email: email });

  try {
    const reservation = await DeliveryReservation.create({
      name,
      email,
      phoneNumber,
      address,
      city,
      state,
      zipCode,
      orderDetails,
      totalPrice,
    });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  console.log(req.body);
};

module.exports = {
  getDeliveryReservations,
  createDeliveryReservation,
};
