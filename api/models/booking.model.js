import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
{
    
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
    userRef: {
        type: String,
        required: true,
    },
    userMail: {
        type: String,
        required: true,
    },

    bookingCity: {
        type: String,
        required: true,
    },
    bookingAddress: {
        type: String,
        required: true,
    },
    bookingPhoneNumber: {
        type: Number,
        required: true,
    },
    bookingUserRef: {
        type: String,
        required: true,
    },
    bookingUserMail: {
        type: String,
        required: true,
    },
    
    bookingTime: {
        type: Number,
        required: true,
    },
    bookingDays: {
        type: Number,
        required: true,
    },
    bookingDate: {
        type: String,
        required: true,
    },
    
},
{timestamps: true}

)
const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;