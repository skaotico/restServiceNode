import Router from 'express';
import { NAME_API } from '../config.js';
import { validateAuth } from '../middlewares/validateToken.js';
import { getTaskById,getTasks,deleteTask,updateTask,createTask } from '../controllers/task.controller.js';


const router = new Router();

//busqueda de tareas
router.get(NAME_API+'/tasks',validateAuth,getTasks);
router.get(NAME_API+'/tasks/:id',validateAuth,getTaskById);
//eliminacion de tarea
router.delete(NAME_API+'/tasks/:id',validateAuth,deleteTask);
//actualizacion de tareas
router.put(NAME_API+'/tasks/:id',validateAuth,updateTask);
//creacion de tareas
router.post(NAME_API+'/tasks',validateAuth,createTask);

export default router;