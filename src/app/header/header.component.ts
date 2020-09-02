import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../Services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService:AuthentificationService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.LogOUT()
  }
}
