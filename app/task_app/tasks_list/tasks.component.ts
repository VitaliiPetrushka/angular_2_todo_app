import { Component, Input, OnInit, Inject } from "@angular/core";
import { TaskRunnerService } from "../../services/TaskRunner.service";
import { Task, ITask } from "../task.class";
import "./tasks.component.scss";

@Component({
   selector: "tasks",
   templateUrl: "./app/task_app/tasks_list/tasks.component.html"
})

export class TasksListComponent implements OnInit{
   tasks: ITask[];
   loading: boolean;

   constructor(@Inject(TaskRunnerService) private taskRunner: TaskRunnerService) {
      this.tasks = [];
      this.loading = true;
   }

   ngOnInit() {
      this.taskRunner.getData().then((data) => { this.tasks = data; this.loading = false; })
   }

   onTaskDelete(task: ITask) {
      this.taskRunner.deleteTask(task)
   }
}