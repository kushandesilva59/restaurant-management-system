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
  const {
    date,
    username,
    time,
    userEmail,
    guestCount,
    specialReq,
    orderComplete,
  } = req.body;

  // const reservation = await TableReservation.findOne({ email: email });

  try {
    const reservation = await TableReservation.create({
      date,
      time,
      username,
      guestCount,
      userEmail,
      specialReq,
      orderComplete
    });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  console.log(req.body);
};

const getReservationByEmailAndDate = async (req, res) => {
  const { userEmail, date } = req.body;
  console.log(userEmail);

  const reservation = await TableReservation.findOne({ userEmail, date });

  if (!reservation) {
    return res.status(400).json({ error: "No reservation found!..." });
  }

  res.status(200).json(reservation);
};

const getReservationByDate = async (req, res) => {
  const { date } = req.body;
  console.log(date);

  const reservation = await TableReservation.find({ date });

  if (!reservation) {
    return res.status(400).json({ error: "No reservation found!..." });
  }

  res.status(200).json(reservation);
};

const getReservationByEmail = async (req, res) => {
  const { userEmail } = req.body;
  console.log(userEmail);

  const reservation = await TableReservation.find({ userEmail });
  console.log(reservation)

  if (!reservation) {
    return res.status(400).json({ error: "No reservation found!..." });
  }

  res.status(200).json(reservation);
};

module.exports = {
  getTableReservations,
  createReservation,
  getReservationByEmailAndDate,
  getReservationByDate,
  getReservationByEmail,
};
