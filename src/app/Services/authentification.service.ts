import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_ATH_LINK = 'https://immense-citadel-91115.herokuapp.com/api/Users/login';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private http:HttpClient
  ) { }

  LogIN(credentials) {
    return this.http.post<any>(API_ATH_LINK, credentials)
  }
}
