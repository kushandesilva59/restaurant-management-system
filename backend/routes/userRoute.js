const express = require('express');
const { getUsers,getUser,deleteUser,updateUser,createUser } = require('../controllers/userController');

const router = express.Router()

router.get('/',getUsers);

router.get('/:id',getUser);

router.post('/', createUser);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);


module.exports = router;