import { Task, User, ID} from './types';

// Clase para gestionar tareas
class TaskManager {
  private tasks: Task[] = [];

  // Método para añadir una nueva tarea
  public addTask(description: string): Task {
    const newTask: Task = {
      id: this.generateID(),
      description: description,
      completed: false
    };
    this.tasks.push(newTask);
    return newTask;
  }

  // Método para marcar una tarea como completada
  public completeTask(id: ID): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
    }
  }

  // Método para obtener todas las tareas
  public getTask(): Task[] {
    return this.tasks;
  }

  // Método privado para generar un ID único
  private generateID(): ID {
    return Math.floor(Math.random() * 10000);
  }
}

// Clase para gestionar usuarios
class UserManager {
  private users: User[] = [];

  // Método para añadir un nuevo usuario
  public addUser(name: string): User {
    const newUser: User = {
      id: this.generateID(),
      name: name,
      tasks: []
    };
    this.users.push(newUser);
    return newUser;
  }

  // Método para asignar una tarea a un usuario
  public assignTask(userID: ID, task: Task): void {
    const user = this.users.find(u => u.id === userID);
    if (user) {
        user.tasks.push(task);
    }
  }

  // Método para obtener todos los usuarios
  public getUsers(): User[] {
    return this.users;
  }

  // Método privado para generar un ID único
  private generateID(): ID {
    return Math.floor(Math.random() * 10000);
  }
}

export { TaskManager, UserManager };
