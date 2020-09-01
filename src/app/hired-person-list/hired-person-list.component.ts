import { Component, OnInit } from '@angular/core';
import { CvServiceService } from '../Services/cv-service.service';

@Component({
  selector: 'app-hired-person-list',
  templateUrl: './hired-person-list.component.html',
  styleUrls: ['./hired-person-list.component.css']
})
export class HiredPersonListComponent implements OnInit {

  theHireList = this.cvservice.CVlists

  constructor(
    private cvservice:CvServiceService
  ) { }

  ngOnInit(): void {
  }

}
