import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  theurl=''

  theBool:boolean = true

  remove() {
   this.theBool = !this.theBool
  }

  constructor() { }

  ngOnInit(): void {
  }

}
