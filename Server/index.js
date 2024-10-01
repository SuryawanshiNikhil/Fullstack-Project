require("dotenv").config()
const express = require('express');
const app = express();
const router = require('./router/Auth-router');
const contatroute=require("./router/contact-route")
const serviceRoute=require("./router/service-router");
const adminRoute=require("./router/Admin-router")
const  connectDB  = require('./Utils/db'); // Ensure the correct path to db.js
const errorMidleware=require('./middleware/error-middleware')
const Cors=require('cors')


const Coroption ={
  origin:"http://127.0.0.1:5173",
  methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
  allowedHeaders: ['Content-Type', 'Authorization'],

  Credential:true,
}
app.use(Cors(Coroption));

app.use(express.json());
app.use('/api/v1', router);
app.use('/api/from', contatroute)
app.use('/api/data', serviceRoute)
app.use('/api/adminroute', adminRoute)
app.use(errorMidleware);
const PORT = 5001;


connectDB() // Call connectDB which returns a promise
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    next(error)
    process.exit(1); // Exit the process with an error code
  });


