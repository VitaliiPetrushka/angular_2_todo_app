export interface ITask {
   name: string;
   done: boolean;
}

export class Task implements ITask{
   constructor(public name: string, public done: boolean = false){}
}