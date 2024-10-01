const mongoose=require('mongoose')

//const URI="mongodb://27017/mern_admin"
const URI=process.env.MONGODB_URI;


const connectDB=async()=>{
try {
    await mongoose.connect(URI);

    console.log("Database is connected succesfullyu")

} catch (error) {
    console.log("database is not connected ")
}
}
module.exports=connectDB;