import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {selectTasks} from './store/task.selectors';
import { loadTasks } from './store/task.actions';
import {AppState} from './store/app.state';
import {Task} from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-mgmt';
  tasks$ = this.store.select(selectTasks);

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
  }

  trackById(index: number, item: Task): string {
    return item.id;
  }

}
