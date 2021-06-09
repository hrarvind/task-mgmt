import {createReducer, on} from '@ngrx/store';
import {loadTasksSuccess } from './task.actions';
import {Task} from '../task/task';

export interface TaskState {
  [id: string]: Task;
}

export const taskFeatureKey = 'task';

export interface TaskRootState {
  [taskFeatureKey]: TaskState;
}

const initialState: TaskState = {};

export const taskReducer = createReducer(
  initialState,
  on(loadTasksSuccess, (state, {tasks}) => tasks.reduce((acc, task) => ({
    ...acc,
    [task.id]: task
  }), {}))
);
