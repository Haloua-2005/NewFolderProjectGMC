import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { }

  Bool:boolean = false;

  TodoList = ["Buy some Foods ","Take the car","Walk the dog"]

  push(message){
    this.TodoList.push(message)
  }

  delete(theValue){
    this.TodoList.splice(theValue - 1, 1)
  }

  show() {
    this.Bool = !this.Bool
  }

}
