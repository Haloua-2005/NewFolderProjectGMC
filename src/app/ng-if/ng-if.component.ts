import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../Services/todo-service.service';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  theBool:boolean = false

  thevalue = ""

  Valeur = [];

  NewValue:number;

  remove() {
   this.theBool = !this.theBool
  }

  constructor(
    private todoList: TodoServiceService
  ) { }

  ngOnInit(): void {
  }

  Show() {
    this.Valeur = this.todoList.TodoList
    this.theBool = this.todoList.Bool
    this.todoList.show()
  }


  Push(value){
    if (value == "" && value === value) {
      alert("Please Type in the Input")
    } else {
      this.todoList.push(value)
    }
    this.Valeur = this.todoList.TodoList
    console.log(this.Valeur)
  }

  Delete(NewValue) {
    this.todoList.delete(NewValue)
    this.Valeur = this.todoList.TodoList
  }

}
