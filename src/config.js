

// path

export const NAME_API = "/api";
export const NAME_API_USUARIO_LOGIN ="/login";
export const NAME_API_USUARIO_REGISTRO  ="/registro";
export const NAME_API_USUARIO_LOGOUT = "/logout";
export const NAME_API_USUARIO_PERFIL  = "/profile";


export const NAME_API_TAREAS_LISTAR = "/tasks";
export const NAME_API_TAREAS_LISTAR_ID = "/tasks/:id";
export const NAME_API_TAREAS_ELIMINAR_ID = "/tasks/:id";
export const NAME_API_TAREAS_MODIFICAR_ID = "/tasks/:id";
export const NAME_API_TAREAS_CREAR = "/tasks";



/*
    mensajes para modelo User
*/



export const MENSSAGE_EXITO_CREATE_USER = "exito al crear el usuario";
export const MENSSAGE_ERROR_CREATE_USER = "error al crear el ususario";
export const MENSSAGE_ERROR_LOGIN = "error con las credenciales";
export const MENSSAGE_ERROR_USUARIO_NO_ENCOTRADO = "usuario no encontrado";
export const MESSAGE_LOGOUT = "session terminada";
export const VACIO = "";


/*
    mensajes para modelo task
*/
export const MENSSAGE_TAREAS_NO_ENCONTRADAS = "error con las credenciales";
export const MENSSAGE_TAREA_NO_CREADA = "error al crear la tarea";
export const MENSSAGE_TAREA_EXISTENTE = "ya se encuentra una tarea creada con ese titulo";
export const MENSSAGE_TAREA_NO_ENCONTRADA = "no se encontro alguna tarea con ese ID";
export const MENSSAGE_ERROR_BUSCANDO_TAREA="error al buscar la tarea";
export const MENSSAGE_ERROR_TAREA_NO_UPDATE = "error al updetear la tarea";



/*
    errores comunes 
*/
export const ERROR_SERVER = "error al ejecutar la consula en el servidor";
export const ERROR_TOKEN_INVALIDO = "token invalido";
export const ERROR_TOKEN_NO_INGRESADO = "Token no ingresado,Acceso denegado";


/*
    Mensajes de errror para ZOD validaciones de estructura de datos

*/
export const ERROR_USERNAME_REQUERIDO  ="userName es requerido";
export const ERROR_USERNAME_MIN_LARGO = "userName debe de contener 5 carracteres como minumo";
export const ERROR_USERNAME_MAX_LARGO  ="username debe de contaner 10 caracteres como maximo";
export const ERROR_EMAIL_REQUERIDO  ="email es requerido";
export const ERROR_EMAIL_FORMATO = "email no contiene un formato valido";
export const ERROR_PASS_REQUERIDO = "password es requerido";
export const ERROR_PASS_MIN_LARGO = "password debe de contar con 5 caracteres como minimo";
export const ERROR_PASS_MAX_LARGO ="password debe de contar con 10 caracteres como maximo";



export const CANTIDAD_MINIMA_CARACTERES_USERNAME = 5;
export const CANTIDAD_MAXIMA_CARACTERES_USERNAME = 10;
export const CANTIDAD_MINIMA_CARACTERES_PASS = 5;
export const CANTIDAD_MAXIMA_CARACTERES_PASS = 15;
/*
    codigos de error
*/
export const COD_ERROR_CREATE_USER = 500;
export const COD_EXITO = 200;
export const COD_NO_ENCONTRADO = 200;
export const COD_ERROR = 400;



/*
    palabras reservadas
*/

export const APP_TOKEN = "token";
export const APP_MENSSAGE = "menssage";
export const APP_TOKEN_SECRET = 'secreto123';



/*
codigos de error mongose
*/

export const BD_ERROR_CLAVE_DUPLICADA = "E11000";


/*
    nombres de los schemas de BD
*/

export const BD_SCHEMA_USUARIO = "User";
export const BD_SHEMA_TASK = "Task";

