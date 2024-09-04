const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser')

require("dotenv").config();

const mongoose = require("mongoose");

const usersRoutes = require("./routes/userRoute");
const tableReservationRoute = require("./routes/tableReservationRoute");

const app = express();

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ["POST","GET"],
  credentials: true
}));
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(bodyParser.json())

app.use((req, res, next) => {
  next();
});

app.use("/api/users", usersRoutes);
app.use("/api/table-reservations", tableReservationRoute);

//connect to db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
    app.listen(process.env.PORT, () => {
      console.log("App is running on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});
