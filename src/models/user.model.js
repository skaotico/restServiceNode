import mongoose from "mongoose";
import { BD_SCHEMA_USUARIO } from "../config.js";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:true,
        trim:true,
    },
    email:{
        type:String,
        require:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        trim:true,
    },
    

}, {
    timestamps:true
});

export default  mongoose.model(BD_SCHEMA_USUARIO,userSchema);
