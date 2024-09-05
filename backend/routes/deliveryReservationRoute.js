const express = require("express");
const {
  getDeliveryReservations,
  createDeliveryReservation,
} = require("../controllers/deliveryReservationController");

const router = express.Router();

router.get("/", getDeliveryReservations);
router.post("/reserve", createDeliveryReservation);

module.exports = router;
