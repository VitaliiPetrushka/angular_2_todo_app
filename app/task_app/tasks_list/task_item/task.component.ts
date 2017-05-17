import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task, ITask } from "../../task.class";
import "./task.component.scss";

@Component({
   selector: "task",
   templateUrl: "./app/task_app/tasks_list/task_item/task.component.html"
})

export class TaskComponent {
   @Input() task: ITask;
   @Output() ondelete = new EventEmitter();

   constructor() {}

   toggle_task_completed() {
      this.task.done = !this.task.done;
   }

   delete_task() {
      this.ondelete.emit(this.task);
   }
}