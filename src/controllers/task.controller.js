
import {
    COD_EXITO,
    COD_NO_ENCONTRADO,
    MENSSAGE_TAREAS_NO_ENCONTRADAS,
    COD_ERROR,
    MENSSAGE_TAREA_NO_CREADA,
    MENSSAGE_TAREA_EXISTENTE,
    MENSSAGE_TAREA_NO_ENCONTRADA,
    MENSSAGE_ERROR_BUSCANDO_TAREA
} from "../config.js";
import taskModel from "../models/task.model.js";


/*
    metodo encargado de listar tareas
    @param      id --> generado desde el token en login 
    @return     json{tasks}
*/
export const getTasks = async (req, res) => {

    try {
        const tasks = await taskModel.find({
            user:req.user.id
        });
        if (tasks) {
            return res.status(COD_EXITO).json(tasks);
        } else {
           return  res.status(COD_NO_ENCONTRADO).json({ "message": MENSSAGE_TAREAS_NO_ENCONTRADAS });
        }
    } catch (error) {
        res.status(COD_ERROR).json({ "message": "problemas en el servidor" })
    }

    ;
}

/*
    metodo encargado de buscar tareas por ID
    @param      Id Task
    @return     json{tasks}
*/
export const getTaskById = async (req, res) => {

    try {
        const task = await taskModel.findById(req.params.id).populate('user');
        if (task) {
            res.status(COD_EXITO);
            res.json(task);
        } else {
            return res.status(COD_NO_ENCONTRADO).json({ "message": MENSSAGE_TAREA_NO_ENCONTRADA });
        }

    } catch (error) {
        console.error(error);
        return res.status(COD_ERROR).json({ "message": MENSSAGE_ERROR_BUSCANDO_TAREA });
    }


}

/*
    metodo encargado de eliminar tareas por id
    @param      Id Task
    @return     json{tasks}
*/
export const deleteTask = async (req, res) => {

    try {
        const task = await taskModel.deleteOne({ "_id": req.params.id });
        if (task) {
            return res.status(COD_EXITO).json(task);
        } else {
            return res.status(COD_NO_ENCONTRADO).json({ "message": MENSSAGE_TAREA_NO_ENCONTRADA });
        }

    } catch (error) {
        console.error(error);
        return res.status(COD_ERROR).json({ "message": MENSSAGE_ERROR_BUSCANDO_TAREA });
    }

}

/*
    metodo encargado de actualizar task por id
    @param      Id Task, Json{task}
    @return     json{tasks}
*/
export const updateTask = async (req, res) => {
    try {

        const { title, description, finishDate } = req.body;
        const newTask = await taskModel.findOneAndUpdate(
            { _id: req.params.id },
            { title, description, finishDate },
            { new: true }
        );
        if (newTask) {
            return res.status(COD_EXITO).json({ "message": newTask });

        } else {
            return res.status(COD_ERROR).json({ "message": MENSSAGE_ERROR_TAREA_NO_UPDATE });
        }
    } catch (error) {
        return res.status(COD_ERROR).json({ "message": MENSSAGE_ERROR_TAREA_NO_UPDATE });
    }


}

/*
    metodo encargado de actualizar task por id
    @param      Json{task}
    @return     json{tasks}
*/
export const createTask = async (req, res) => {

    try {
        const { title, description, finishDate } = req.body;
        const newTask = new taskModel({
            title,
            description,
            finishDate,
            user: req.user.id,
        });

        const saveTask = await newTask.save();

        if (saveTask) {
            return res.status(COD_EXITO).json(saveTask);
        } else {
           return  res.status(COD_NO_ENCONTRADO).json({ "message": MENSSAGE_TAREA_NO_CREADA });
        }

    } catch (error) {
        console.log(error);
        if (error.toString().indexOf("E11000")) {
            res.status(COD_ERROR);
            res.json({ "message": MENSSAGE_TAREA_EXISTENTE });
        } else {
            res.status(COD_ERROR);
            res.json({ "message": "problemas en el servidor" });
        }

    }
}

