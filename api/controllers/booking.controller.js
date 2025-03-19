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

export const updateBooking = async (req, res, next) =>{
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
        return next (errorHandler(404, 'Booking not found'));
    }
    if (!req.user.isAdmin && req.user.id !== booking.userRef) {
        return next(errorHandler(401, 'You can only set your own booking!'));
    }

    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                  bookingStatus: req.body.bookingStatus,
                },
              },
              
            { new: true }
        );
        res.status(200).json(updatedBooking);
    } catch (error) {
        next(error)
    }
}

export const getBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return next(errorHandler(404, 'Booking not found'))
        }
        res.status(200).json(booking);
    } catch (error) {
        next(error)
    } 
    }

    export const getBookings = async (req, res, next) => {
      try {
          const limit = parseInt(req.query.limit) || 9;
          const startIndex = parseInt(req.query.startIndex) || 0;

          const searchTerm = req.query.searchTerm || '';

    const sort = req.query.sort || 'createdAt';

    const order = req.query.order || 'desc';
    const query = {};

          if (searchTerm) {
            query.$or = [
              { name: { $regex: searchTerm, $options: 'i' } },
              { address: { $regex: searchTerm, $options: 'i' } },
            ];
          }
      
      const Bookings = await Booking.find(query)
        .sort({ [sort]: order })
        .limit(limit)
        .skip(startIndex);
  
        const totalBookings = await Booking.countDocuments();
  
      const now = new Date();
  
      const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );
  
      const lastMonthBookings = await Booking.countDocuments({
        createdAt: { $gte: oneMonthAgo },
      });
  
      
  
        return res.status(200).json(Bookings, totalBookings,
          lastMonthBookings,);
  
      } catch (error) {
          next(error);
      }
  }