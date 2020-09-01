import { Injectable } from '@angular/core';
import { CvServiceService } from './cv-service.service';
import { HttpClient } from '@angular/common/http';
import { Person } from '../attributes/Person';
import { CVsComponent } from '../cvs/cvs.component';

@Injectable({
  providedIn: 'root'
})
export class HiringServiceService {

  constructor(
    private serviceCV:CvServiceService,
    private http:HttpClient
  ) { }



  Push(value){
    this.serviceCV.CVlists.push(value)
  }
}
