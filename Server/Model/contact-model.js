const mongoose = require('mongoose'); // Import mongoose

// Define the schema using Schema constructor
const contactSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    isAdmin:{
        type:String,
        require:true
    }

});

// Create the model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
