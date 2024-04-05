import Router from 'express';
import {login,registro,logout,profile} from '../controllers/auth.controller.js'
import { NAME_API } from '../config.js';
import { validateAuth } from '../middlewares/validateToken.js';

const router = new Router();

//creacion de usuario
router.post(NAME_API+'/registro',registro);
//ingreso del usuario
router.post(NAME_API+'/login',login);
// salida del usuario de la app
router.post(NAME_API+'/logout',logout);
//datos del usuario
router.get(NAME_API+'/profile',validateAuth,profile);

export default router;