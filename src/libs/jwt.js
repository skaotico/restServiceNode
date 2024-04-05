import { APP_TOKEN_SECRET } from "../config.js";
import jwt from "jsonwebtoken";



/*
    funcion encargada de generar el token de session, tiempo de duracaion de este token 1D
    @Params  -> ID usuario ingresado 
    @return  -> token generado para session
*/
export function createAccessToken(payload) {

    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            APP_TOKEN_SECRET, {
            expiresIn: "1d",
        },
            (error, token) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(token);
                }
            }
        );
    });
}