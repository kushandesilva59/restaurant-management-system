const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tableReservationSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    guestCount: {
      type: Number,
      required: true,
    },
    specialReq: {
      type: String,
    },
    orderComplete: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TableReservation", tableReservationSchema);
