import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthentificationService } from '../Services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authentificationservice:AuthentificationService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  login(LoginForm : NgForm) {
    this.authentificationservice.LogIN(LoginForm.value).subscribe(
      (data) => {
        localStorage.setItem('token',data.id);
        //console.log(data)
        this.router.navigate(['cv'])
      },
      (error) => console.log(error)
    )
    console.log(LoginForm.value)
  }
}
