import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const validateAuth = (req, resp, next) => {
    const { token } = req.cookies;
    if (token) {

        jwt.verify(token, TOKEN_SECRET, (error, user) => {
            if (error) {
                return resp.status(401).json({ "menssage": "token invalido" });
            } else {

                req.user = user;
                console.log("estos son los "+user);
                next();
            }
        });
    }
    else {
        return resp.status(401).json({ "menssage": "no token, acceso denegado" });
    }
   
}