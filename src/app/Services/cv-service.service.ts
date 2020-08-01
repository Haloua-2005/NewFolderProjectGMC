import { Injectable } from '@angular/core';
import { Person } from '../attributes/Person';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {

  hedi = new Person ("Ben Hamdi","Hedi","Politician","");
  taher = new Person ("Mtahri","Taher","Youtuber","")


  CVlists = [this.hedi,this.taher]

  constructor() { }
}
