import { Component } from "@angular/core";
import { ITask, Task } from "./task.class";
import { TaskRunnerService } from "../services/TaskRunner.service";
import "./task_app.component.scss";

@Component({
   selector: "task-app",
   templateUrl: "./app/task_app/task_app.component.html",
   providers: [ TaskRunnerService ]
})

export class TaskAppComponent {

}