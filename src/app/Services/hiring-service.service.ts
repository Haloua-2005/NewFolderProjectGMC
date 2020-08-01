import { Injectable } from '@angular/core';
import { CvServiceService } from './cv-service.service';

@Injectable({
  providedIn: 'root'
})
export class HiringServiceService {

  constructor(
    private serviceCV:CvServiceService
  ) { }

  Push(value){
    this.serviceCV.CVlists.push(value)
  }
}
