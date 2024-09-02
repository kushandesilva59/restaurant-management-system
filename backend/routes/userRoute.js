const express = require('express');
const { getUsers,getUser,deleteUser,updateUser,createUser, login, loggedin } = require('../controllers/userController');

const router = express.Router()

router.get('/',getUsers);

router.post('/', createUser);

router.post('/login', login);

router.get('/loggedin', loggedin);

router.get("/:id", getUser);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);


module.exports = router;