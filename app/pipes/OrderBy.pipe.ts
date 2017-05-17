import { Pipe, PipeTransform } from "@angular/core";
import { Task } from "../task_app/task.class";

@Pipe({
   name: "OrderBy"
})

export class OrderByPipe implements PipeTransform {
   transform(input: Task[], value: Task) {

   }
}