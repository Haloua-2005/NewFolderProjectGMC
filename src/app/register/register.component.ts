import { Component, OnInit } from '@angular/core';
import { CvServiceService } from '../Services/cv-service.service';
import { HiringServiceService } from '../Services/hiring-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  First;
  Second;

  name;
  FirstName;
  Occupation;
  Image;
  User = [this.name, this.FirstName,this.Occupation,this.Image]

  constructor(
    private cvService:CvServiceService,
    private hireService:HiringServiceService,
    private router:Router
  ) { }

  Add() {
    const LINK=["cv"]
    this.hireService.Push(this.User)
    this.router.navigate(LINK)
  }

  ngOnInit(): void {
    console.log()
  }

}
