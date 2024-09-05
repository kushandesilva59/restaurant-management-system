const express = require("express");
const {
  getDeliveryReservations
} = require("../controllers/deliveryReservationController");

const router = express.Router();

router.get("/", getDeliveryReservations);


module.exports = router;
