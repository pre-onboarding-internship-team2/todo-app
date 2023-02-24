interface CreateTodoRequest {
  todo: string;
};

interface UpdateTodoRequest {
  id: number;
  todo: string;
  isCompleted: boolean;
};

interface DeleteTodoRequest {
  id: number;
};

export type { CreateTodoRequest, UpdateTodoRequest, DeleteTodoRequest };
