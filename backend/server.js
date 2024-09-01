const express = require('express')
const cors = require("cors");
require('dotenv').config()

const mongoose = require('mongoose')

const usersRoutes = require('./routes/userRoute')


const app = express()

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path )
    console.log(req.method)
    next()
})

app.use('/api/users',usersRoutes)


//connect to db 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");
    app.listen(process.env.PORT, () => {
        console.log('App is running on port', process.env.PORT);
        
    });
  
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });


app.get('/',(req, res)=>{
    res.json({message: "Welcome"})
})




