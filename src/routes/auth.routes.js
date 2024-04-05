import Router from 'express';
import {login,registro,logout,profile} from '../controllers/auth.controller.js'
import { NAME_API,
        NAME_API_USUARIO_LOGIN,
        NAME_API_USUARIO_REGISTRO,
        NAME_API_USUARIO_LOGOUT,
        NAME_API_USUARIO_PERFIL } from '../config.js';
import { validateAuth } from '../middlewares/validateToken.js';
import { validarSchema } from '../middlewares/validator.middleware.js';
import { registerSchema,loginSchema } from '../schemas/auth.schema.js';

const router = new Router();

//creacion de usuario
router.post(NAME_API+NAME_API_USUARIO_REGISTRO, validarSchema(registerSchema),registro);

//ingreso del usuario
router.post(NAME_API+NAME_API_USUARIO_LOGIN,validarSchema(loginSchema),login);

// salida del usuario de la app
router.post(NAME_API+NAME_API_USUARIO_LOGOUT,logout);

//datos del usuario, metodo protegido por 'validateAuth' se debe de ingresar token de session
router.get(NAME_API+NAME_API_USUARIO_PERFIL,validateAuth,profile);

export default router;