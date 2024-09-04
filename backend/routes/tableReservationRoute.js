const express = require("express");
const {
 getTableReservations,
 createReservation
} = require("../controllers/tableReservationController");

const router = express.Router();

router.get("/", getTableReservations);
router.post("/reserve", createReservation);



module.exports = router;
