import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js'
import {
    MENSSAGE_ERROR_CREATE_USER,
    MENSSAGE_EXITO_CREATE_USER,
    COD_ERROR_CREATE_USER,
    COD_EXITO,
    MENSSAGE_ERROR_LOGIN,
    APP_TOKEN,
    APP_MENSSAGE,
    MENSSAGE_ERROR_USUARIO_NO_ENCOTRADO
} from "../config.js";




export const registro = async (req, res) => {
    const { email, userName, password } = req.body;
    const passEncript = await bcrypt.hash(password, 10);
    try {
        const newUser = new User({
            userName,
            email,
            password: passEncript,
        });
        const userSave = await newUser.save();
        console.log(newUser);
        const token = await createAccessToken({ id: userSave._id });
        res.status(COD_EXITO);
        res.cookie(APP_TOKEN, token);
        res.json({ APP_MENSSAGE: MENSSAGE_EXITO_CREATE_USER });
    } catch (error) {
        console.log(error);
        res.status(COD_ERROR_CREATE_USER);
        res.json({ APP_MENSSAGE: MENSSAGE_ERROR_CREATE_USER });

    }
}


export const login = async (req, res) => {
    const { email, password } = req.body;
    try {

        const findUser = await User.findOne({ email });
        if (findUser) {

            const isUser = await bcrypt.compare(password, findUser.password);
            if (isUser) {
                const token = await createAccessToken({ id: findUser._id });
                const usuario = new User({
                    email: findUser.email,
                    userName: findUser.userName,
                    id: findUser._id,
                });
                res.status(COD_EXITO);
                res.cookie(APP_TOKEN, token);
                res.json(usuario);

            } else {
                res.status(COD_ERROR_CREATE_USER);
                res.json({APP_MENSSAGE: MENSSAGE_ERROR_LOGIN });
            }

        } else {
            res.status(COD_ERROR_CREATE_USER);
            res.json({ APP_MENSSAGE: MENSSAGE_ERROR_LOGIN});
        }


    } catch (error) {
        res.status(500);
        res.json({ APP_MENSSAGE: MENSSAGE_ERROR_LOGIN});

    }
}

export const logout =  (req,res) =>{
    res.cookie("token","",{expires:new Date(0)});
    res.status(COD_EXITO);
    res.json({"menssage":"logout completo"});
}

export const profile =  async (req,res)=>{

    console.log(req.user);
    try{
        const usuario = await User.findById(req.user.id);
         if(usuario){
        
            const usuarioEncontrado = new User({
                email:usuario.email,
                userName:usuario.userName,
                createdAt:usuario.createdAt,
            });

            res.status(COD_EXITO);
            res.json(usuarioEncontrado);


        }else{
            res.status(400);
            res.json({APP_MENSSAGE:MENSSAGE_ERROR_USUARIO_NO_ENCOTRADO});
        }
    }
    catch(error){
        res.status(500);
        res.json({APP_MENSSAGE:MENSSAGE_ERROR_USUARIO_NO_ENCOTRADO});
    }
    
}