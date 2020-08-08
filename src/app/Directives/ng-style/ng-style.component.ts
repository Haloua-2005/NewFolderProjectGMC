import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  color;

  FirstClassbool:boolean = false;
  SecondClassbool:boolean = false;
  ThirdClassbool:boolean = false;

  Change(value1,value2,value3) {
    this.FirstClassbool = value1
    this.SecondClassbool = value2
    this.ThirdClassbool = value3
  }

  constructor(
    private route:Router,
  ) { }

  ngOnInit(): void {
  }

  ChangeColor() {
    const LINK = ['color',this.color]
    this.route.navigate(LINK)

  }

}
