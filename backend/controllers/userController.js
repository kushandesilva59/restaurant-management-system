const User = require('../models/userModel')
const mongoose = require('mongoose')

//get all users
const getUsers = async (req, res)=>{
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}

//create new user
const createUser = async (req, res)=>{
    console.log(req.body)

    const {role, username, password, email} = req.body

    try{
        const user = await User.create({role, username, password, email})
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//get single user
const getUser = async(req, res)=>{
   
    const {id} = req.params
    console.log(id)

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user!...'})
    }

    const user = await User.findById(id)

    if(!user){
        return res.status(400).json({error: 'No such user!...'})
    }

    res.status(200).json(user)
}

//delete user

const deleteUser = async(req, res)=>{
    const {id}  = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user!...'})
    }

    const user = await User.findOneAndDelete({_id: id})

    if(!user){
        return res.status(400).json({error: 'No such user!...'})
    }

    res.status(200).json(user)

}

//update user
const updateUser = async(req, res)=>{
    const {id}  = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user!...'})
    }

    const user = await User.findByIdAndUpdate({_id: id},{
        ...req.body
    })

    if(!user){
        return res.status(400).json({error: 'No such user!...'})
    }

    res.status(200).json(user)

}

module.exports = {
   getUsers,
   createUser,
   deleteUser,
   getUser,
   updateUser
}