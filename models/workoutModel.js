const mongoose = require('mongoose')
const exerciseSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: false
    },
    sets: {
        type: Number,
        required: false
    },
    reps: {
        type: Number,
        required: false
    },
    distance: {
        type: Number,
        required: false
    },
    duration: {
        type: Number,
        required: false
    }


})

const workoutSchema = mongoose.Schema({
    day: {
        type: Date,
        default: new Date()
    },
    exercises: [exerciseSchema],
    totalDuration: {
        type: Number,
        default: 0
    }
})

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;