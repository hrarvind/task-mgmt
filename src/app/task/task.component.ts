import {Component, Input} from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task?: Task;

  constructor() {
}
ngOnInit(): void {
    console.log("TASK", this.task);
  }
}
