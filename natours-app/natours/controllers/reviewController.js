const Reviw = require('../models/reviewModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Review = require('../models/reviewModel');



exports.getAllReviews = catchAsync(async(req, res, next)) => {
    const review = await Review.find();

    res.status(200).json({
        status: 'success',
        results: review.length,
        data: {
            review
        }
    })
}

exports.createReview = catchAsync(async(req, res, next)) => {
    const review = await Review.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            review: newReview
        }
    })
}