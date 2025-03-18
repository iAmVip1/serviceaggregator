import Booking from "../models/booking.model.js";
import { errorHandler } from "../utils/error.js";

export const createBooking = async (req, res, next) =>{
    try {
        const booking = await Booking.create(req.body);
        return res.status(201).json(booking);

    } catch (error) {
        next(error);
        
    }
}