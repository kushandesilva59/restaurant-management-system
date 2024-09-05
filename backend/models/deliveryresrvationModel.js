const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderDetailSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const deliveryReservationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    cardName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: Number,
      required: true,
    },
    orderDetails: {
      type: [orderDetailSchema],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "DeliveryReservation",
  deliveryReservationSchema
);
