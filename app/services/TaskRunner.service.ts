import { Injectable } from "@angular/core";
import { ITask } from "../task_app/task.class";
import { data_tasks } from "../shared/tasks.data";

@Injectable()
export class TaskRunnerService {

   getData(): Promise<ITask[]> {
      return new Promise((resolve) => setTimeout(() => resolve(data_tasks), 1500));
   }

   deleteTask(task: ITask) {
      if(task) {
         let index = data_tasks.indexOf(task);
         (index > -1 && (data_tasks.splice(index, 1)));
      }
   }

   addTask(task: ITask) {
      if(task) {
         data_tasks.push(task);
      }
   }
}