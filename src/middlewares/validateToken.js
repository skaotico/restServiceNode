import jwt from "jsonwebtoken";
import { APP_TOKEN_SECRET,
        APP_MENSSAGE,
        ERROR_TOKEN_INVALIDO,
        ERROR_TOKEN_NO_INGRESADO } from "../config.js";


/*
    funcion encargada de validar la session, esta permite redireccionar a los servicios que se necesita un login previo
    @Param --> Req(dentro del req debe de venir el token generado al momento de realizar el login)
    @Retun --> continua con el proceso 
    @Error --> Json{señalando que no existe un token valido}
*/
export const validateAuth = (req, resp, next) => {
    const { token } = req.cookies;
    if (token) {

        jwt.verify(token, APP_TOKEN_SECRET, (error, user) => {
            if (error) {
                return resp.status(401).json({ APP_MENSSAGE: ERROR_TOKEN_INVALIDO});
            } else {

                req.user = user;
                next();
            }
        });
    }
    else {
        return resp.status(401).json({ APP_MENSSAGE: ERROR_TOKEN_NO_INGRESADO});
    }
   
}