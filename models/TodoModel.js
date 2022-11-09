const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');


const TodoSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"please enter the event name"]
    },

    description:{
        type: String,
        required:[true,"please enter the event details"]
    },

    createdAt:{
        type:Date,
        default:Date.now
    },

    toBeDone:{
        type:Date,
        required:[true,"Please enter the date for the event to be completed by"]
    },

    isDone:{
        type:Boolean,
        default:false
    }

})



module.exports=mongoose.model("Todo",TodoSchema);