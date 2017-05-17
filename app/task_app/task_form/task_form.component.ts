import { Component, Output, EventEmitter, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { TaskRunnerService } from "../../services/TaskRunner.service";
import { Task, ITask } from "../task.class";
import "./task_form.component.scss";

@Component({
   selector: "task-form",
   templateUrl: "./app/task_app/task_form/task_form.component.html"
})

export class TaskFormComponent {
   /* form itself */
   taskForm: FormGroup;
   /* form controls */
   taskName: AbstractControl;
   form_submitted: boolean;

   constructor(@Inject(FormBuilder) fb: FormBuilder,
               @Inject(TaskRunnerService) private taskRunner: TaskRunnerService) {
      this.taskForm = fb.group({
         taskName: [null, Validators.required]
      });

      this.taskName = this.taskForm.controls['taskName'];
      this.form_submitted = false;
   }

   add_task(name) {
      this.taskRunner.addTask(new Task(name));
   }

   formSubmit(event) {
      if(!this.form_submitted) this.form_submitted = true;
      event.preventDefault();
      if(this.taskForm.valid) {
         this.add_task(this.taskForm.value.taskName);
      }
   }
}