const User = require("../models/userModel");
const mongoose = require("mongoose");

//get all users
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });

  res.status(200).json(users);
};

//create new user
const createUser = async (req, res) => {
  const { role, username, password, email, confirmPassword } = req.body;

  const user = await User.findOne({ email: email });

  if (user) {
    res.status(400).json({message: "Email is exists !..."})
  } else {
    try {
      const user = await User.create({
        role,
        username,
        password,
        email,
        confirmPassword,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  console.log(req.body);
};

//get single user
const getUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No user found!..." });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(400).json({ error: "No user found!..." });
  }

  res.status(200).json(user);
};

//delete user

const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user!..." });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(400).json({ error: "No such user!..." });
  }

  res.status(200).json(user);
};

//update user
const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user!..." });
  }

  const user = await User.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!user) {
    return res.status(400).json({ error: "No such user!..." });
  }

  res.status(200).json(user);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  // const users = await User.find({}).sort({ createdAt: -1 });

  const user = await User.findOne({ email: email });

  if (user) {
    req.session.username = user.username;
    req.session.email = user.email;

    return res.status(200).json({ Login: true });
  } else {
    return res
      .status(400)
      .json({ Login: false, message: "user not found!..." });
    //return res.status(200).json("User not found");
  }
};

const loggedin = async (req, res) => {
  if (req.session.username) {
    return res.json({ valid: true, username: req.session.username });
  } else {
    return res.json({ valid: false });
  }
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  getUser,
  updateUser,
  login,
  loggedin,
};
