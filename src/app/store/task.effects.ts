import {Actions, createEffect, ofType} from '@ngrx/effects';
import {TaskService} from '../api/task.service';
import {Injectable} from '@angular/core';
import {
  loadTasks,
  loadTasksError,
  loadTasksSuccess,
} from './task.actions';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable()
export class TaskEffects {
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
      switchMap(() => this.taskService.getTasks().pipe(
        map(tasks => loadTasksSuccess({tasks})),
        catchError(() => [loadTasksError()])
      ))
    )
  );

  constructor(private actions$: Actions, private taskService: TaskService) {
  }
}
