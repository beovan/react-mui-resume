const mongoose = require('mongoose');


const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    contacts: {
        type: Map,
        of: String
    },
    skills: {
        type: String,
    },
    socialMedia: {
        type: Map,
        of: String
    },
    education: {
        type: String,
    },
    experience: {
        type: String,
    },
    age: {
        type: Number
    }
});

module.exports = mongoose.model('Profile', profileSchema);