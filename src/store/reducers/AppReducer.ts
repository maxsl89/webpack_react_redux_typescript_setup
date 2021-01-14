import { ADD_TASK, SET_CURRENT_TASK, DELETE_TASK } from './../storeTypings';
import { AppActionsTypes } from './../actions/AppActions';
import { Task } from './../../types';

const initialState = {
  tasks: [] as Task[],
  currentTask: '',
};

type InitialStateType = typeof initialState;

export const appReducer = (
  state = initialState,
  action: AppActionsTypes
): InitialStateType => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.taskId)],
      };
    case SET_CURRENT_TASK:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
