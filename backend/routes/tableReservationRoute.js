const express = require("express");
const {
  getTableReservations,
  createReservation,
  getReservationByEmailAndDate,
  getReservationByDate,
  getReservationByEmail,
} = require("../controllers/tableReservationController");

const router = express.Router();

router.get("/", getTableReservations);
router.post("/reserve", createReservation);
router.get("/get-reserve-by-email-and-date", getReservationByEmailAndDate);
router.get("/get-reserve-by-date", getReservationByDate);
router.get("/get-reserve-by-email", getReservationByEmail);



module.exports = router;
