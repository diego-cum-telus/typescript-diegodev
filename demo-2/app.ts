import { TaskManager, UserManager } from './classes';

// Crear instancias de los gestores
const taskManager = new TaskManager();
const userManager = new UserManager();

// Añadir un nuevo usuario
const usuario = userManager.addUser('Elsa Pato');

// Añadir una nueva tarea
const tarea = taskManager.addTask('Aprender TypeScript');

// Asignar la tarea al usuario
userManager.assignTask(usuario.id, tarea);

// Marcar la tarea como completada
taskManager.completeTask(tarea.id);

// Obtener y mostrar todos los usuarios
const usuarios = userManager.getUsers();
console.log('Usuarios:', usuarios);

// Obtener y mostrar todas las tareas
const tareas = taskManager.getTask();
console.log('Tareas:', tareas);