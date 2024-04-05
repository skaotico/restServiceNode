import mongoose from "mongoose";
import { BD_SCHEMA_USUARIO,BD_SHEMA_TASK } from "../config.js";
 

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
    description: {
        type: String,
        require: true,
        trim: true,

    },
    finishDate: {
        type: Date,
       default: Date.now,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:BD_SCHEMA_USUARIO,
        require: true,
    }


}, {
    timestamps: true
});

export default mongoose.model(BD_SHEMA_TASK, taskSchema);
