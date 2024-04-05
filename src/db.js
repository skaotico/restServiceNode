import mongoose from 'mongoose';

export const connectBD = async () =>{

    try{
        mongoose.connect("mongodb://localhost:27017/db", {
            authSource: "admin",
            user: "root",
            pass: "example",
        });
        console.log("base de datos conectada");
    }
    catch(error){
        console.log(error);
    }
};


