import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const API_ATH_LINK = 'https://immense-citadel-91115.herokuapp.com/api/Users/login';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private router:Router,
    private http:HttpClient
  ) { }

  isAuthenficated() {
    return !!localStorage.getItem('token')
  }

  LogIN(credentials) {
    return this.http.post<any>(API_ATH_LINK, credentials)
  }

  LogOUT() {
    localStorage.removeItem('token')
    this.router.navigate(['Login'])
  }
}
