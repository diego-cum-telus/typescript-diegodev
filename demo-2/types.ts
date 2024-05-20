// Definición de tipos básicos
type ID = number | string;

// Interface para representar una Tarea
interface Task {
  id: ID;
  description: string;
  completed: boolean;
}

// Interface para representar un Usuario
interface User {
  id: ID;
  name: string;
  tasks: Task[];
}

export { ID, Task, User };