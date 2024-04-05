import { COD_ERROR } from "../config.js";


export const validarSchema = (schema) => (req, res, next) => {

    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        console.log(error.errors);
        return res.status(COD_ERROR).json({ error: error.errors.map(error => error.message) });
    }
}