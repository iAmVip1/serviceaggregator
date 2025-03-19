import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
{
    
    username: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber1: {
        type: Number,
        required: true,
    },
    phoneNumber2: {
        type: Number,
        required: true,
    },
    workType: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    imageUrls: {
        type: Array,
        required: true,
    },
    userRef: {
        type: String,
        required: true,
    },
    userMail: {
        type: String,
        required: true,
    },
    userImage: {
        type: String,
        required: true,
    },
    
},
{timestamps: true}

)
const Application = mongoose.model('Application', applicationSchema);

export default Application;