import mongoose from "mongoose";

const TaskSchema=new mongoose.Schema({
    name:{type:String,required:true},
    des:{type:String,required:true},
    date:{type:Date,required:true},
    assingUser:{type:String,required:true}, 
    status: { 
        type: String, 
        enum: ['progress', 'completed'], 
        default: 'progress' 
    }
})

export const Task=mongoose.model('Task',TaskSchema);