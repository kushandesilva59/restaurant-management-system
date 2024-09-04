const mongoose = require("mongoose");
const TableReservation = require("../models/tableReservation");

const getTableReservations = async (req, res) => {
  const reservations = await TableReservation.find({}).sort({ createdAt: -1 });
  console.log("me tyene", reservations);

  //   if (reservations.length === 0) {
  //     res.json({ message: "No reservations :)" });
  //   } else {
  //     res.status(200).json(reservations);
  //   }

  res.status(200).json(reservations);
};

const createReservation = async (req, res) => {
  const { date, username, time, userEmail, guestCount, specialReq } = req.body;

  // const reservation = await TableReservation.findOne({ email: email });

  try {
    const reservation = await TableReservation.create({
      date,
      time,
      username,
      guestCount,
      userEmail,
      specialReq,
    });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  console.log(req.body);
};

module.exports = {
  getTableReservations,
  createReservation,
};
