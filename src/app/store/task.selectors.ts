import {createFeatureSelector, createSelector} from '@ngrx/store';
import {taskFeatureKey, TaskRootState, TaskState} from './task.reducer';

const selectTaskFeature = createFeatureSelector<TaskRootState, TaskState>(taskFeatureKey);

export const selectTasks = createSelector(selectTaskFeature, state => Object.keys(state).map(key => state[key]));

export const selectTask = createSelector(selectTaskFeature, (state: TaskState, props: {id: string}) => state[props.id]);
