const mongoose = require('mongoose')

const FeedbackModel = new mongoose.Schema({
    sender : String,
    feedback : String,
    date: {
        type: Date,
        default: Date.now
    }
})

const feedback = mongoose.model("Feedback", FeedbackModel)
module.exports = feedback