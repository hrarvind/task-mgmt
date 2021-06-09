import {createAction, props} from '@ngrx/store';
import {Task} from '../task/task';

export const loadTasks = createAction('[Tasks List] Load Tasks');
export const loadTasksSuccess = createAction('[Task List] Load Tasks Success', props<{tasks: Task[]}>());
export const loadTasksError = createAction('[Task List] Load Tasks Error');
