import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
{
    
    userName: {
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
    userRef: {
        type: String,
        required: true,
    },
    userMail: {
        type: String,
        required: true,
    },

    bookingUserName: {
        type: String,
        required: true,
    },
    bookingCity: {
        type: String,
        required: true,
    },
    bookingHours: {
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
    
    bookingDays: {
        type: Number,
        required: true,
    },
    bookingDate: {
        type: String,
        required: true,
    },
    bookingStatus: {
        type: Boolean,
        default: false,
    },
    
},
{timestamps: true}

)
const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;