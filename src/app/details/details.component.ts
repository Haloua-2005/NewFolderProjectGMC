import { Component, OnInit } from '@angular/core';
import { CvServiceService } from '../Services/cv-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  DetailList = this.cvService.CVlists
  theIndex;

  constructor(
    private cvService: CvServiceService,
    private activateRoute: ActivatedRoute,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      (parm)=>{
        this.theIndex = parm
      }
    )
    console.log(this.theIndex)
    console.log(this.DetailList[this.theIndex])
  }

  Delete(indice) {
    const LINK=['cv']
    this.DetailList.splice(indice,1)
    this.route.navigate(LINK)
  }

}
