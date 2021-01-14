import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../store';
import {
  AddTask,
  setCurrentTask,
  DeleteTask,
} from '../store/actions/AppActions';
import { Task } from '../types';

type Props = {};

export const App: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const currentTask = useSelector(
    (state: AppStateType) => state.app.currentTask
  );
  const tasks = useSelector((state: AppStateType) => state.app.tasks);

  const _timeInMilliseconds = (): number => {
    return Date.now();
  };

  const deleteTask = (taskId: number): void => {
    dispatch(DeleteTask(taskId));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(setCurrentTask(''));
    dispatch(
      AddTask({
        id: _timeInMilliseconds(),
        value: currentTask,
        completed: false,
      })
    );
  };

  const renderTask = (): JSX.Element[] => {
    return tasks.map((task: Task, index: number) => (
      <div key={task.id.toString()}>
        <span>{task.value}</span>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    ));
  };

  return (
    <React.Fragment>
      <h1>React Typescript Todo List</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="new-todo">What needs to be done?</label>
        <br />
        <input
          id="new-todo"
          type="text"
          value={currentTask}
          placeholder="Add a task"
          onChange={(e) => dispatch(setCurrentTask(e.target.value))}
        />
        <button type="submit">Add Task</button>
      </form>
      <section>{renderTask()}</section>
    </React.Fragment>
  );
};
