import axios, { AxiosInstance, AxiosResponse } from "axios";

const token = localStorage.getItem("token");

export const todoApi: AxiosInstance = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
  headers: {
    Authorization: token && `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export const createTodo = async (todo: string) => {
  try {
    return await todoApi("todos", {
      method: "POST",
      data: {
        todo,
      },
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        (error.response as AxiosResponse<{ message: string }>).data.message,
      );
    }
  }
};

export const getTodos = async () => {
  try {
    return await todoApi("todos", {
      method: "GET",
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        (error.response as AxiosResponse<{ message: string }>).data.message,
      );
    }
  }
};

export const updateTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean,
) => {
  try {
    return await todoApi(`todos/${id}`, {
      method: "PUT",
      data: {
        todo,
        isCompleted,
      },
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        (error.response as AxiosResponse<{ message: string }>).data.message,
      );
    }
  }
};

export const deleteTodo = async (todoId: number) => {
  try {
    return await todoApi(`todos/${todoId}`, {
      method: "DELETE",
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        (error.response as AxiosResponse<{ message: string }>).data.message,
      );
    }
  }
};
