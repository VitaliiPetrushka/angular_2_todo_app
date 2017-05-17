import { NgModule, Type } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TaskAppComponent } from "./task_app/task_app.component";
import { TasksListComponent } from "./task_app/tasks_list/tasks.component";
import { TaskComponent } from "./task_app/tasks_list/task_item/task.component";
import { TaskFormComponent } from "./task_app/task_form/task_form.component";

@NgModule({
   imports: [ BrowserModule, FormsModule, ReactiveFormsModule ],
   declarations: [ AppComponent, TaskAppComponent, TasksListComponent, TaskComponent, TaskFormComponent ],
   bootstrap: [ AppComponent ]
})

export class AppModule extends Type { }