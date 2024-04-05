import Router from 'express';
import { NAME_API,
        NAME_API_TAREAS_LISTAR,
        NAME_API_TAREAS_LISTAR_ID,
        NAME_API_TAREAS_ELIMINAR_ID,
        NAME_API_TAREAS_MODIFICAR_ID,
        NAME_API_TAREAS_CREAR} from '../config.js';
import { validateAuth } from '../middlewares/validateToken.js';
import { getTaskById,getTasks,deleteTask,updateTask,createTask } from '../controllers/task.controller.js';


const router = new Router();

/*
    estas rutas se encuentran protegidas por el metodo 'validateAuth'
    el cual se encarga de validar el token de session
*/

//busqueda de tareas
router.get(NAME_API+NAME_API_TAREAS_LISTAR,validateAuth,getTasks);
router.get(NAME_API+NAME_API_TAREAS_LISTAR_ID,validateAuth,getTaskById);
//eliminacion de tarea
router.delete(NAME_API+NAME_API_TAREAS_ELIMINAR_ID,validateAuth,deleteTask);
//actualizacion de tareas
router.put(NAME_API+NAME_API_TAREAS_MODIFICAR_ID,validateAuth,updateTask);
//creacion de tareas
router.post(NAME_API+NAME_API_TAREAS_CREAR,validateAuth,createTask);

export default router;