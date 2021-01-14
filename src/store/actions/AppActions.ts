import { ADD_TASK, SET_CURRENT_TASK, DELETE_TASK } from '../storeTypings';
import { Task } from './../../types';

export type AddTaskActionType = {
  type: typeof ADD_TASK;
  task: Task;
};

export type SetCurrentTaskActionType = {
  type: typeof SET_CURRENT_TASK;
  payload: { currentTask: string };
};

export type DeleteTaskActionType = {
  type: typeof DELETE_TASK;
  taskId: number;
};

export type AppActionsTypes =
  | AddTaskActionType
  | SetCurrentTaskActionType
  | DeleteTaskActionType;

export const AddTask = (task: Task): AddTaskActionType => ({
  type: ADD_TASK,
  task,
});

export const DeleteTask = (taskId: number): DeleteTaskActionType => ({
  type: DELETE_TASK,
  taskId,
});

export const setCurrentTask = (
  currentTask: string
): SetCurrentTaskActionType => ({
  type: SET_CURRENT_TASK,
  payload: { currentTask },
});
