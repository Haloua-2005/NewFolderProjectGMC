import { Component, OnInit } from '@angular/core';
import { CvServiceService } from '../Services/cv-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../attributes/Person';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  DetailList = this.cvService.CVlists
  leIndice;
  thePersone:Person;

  constructor(
    private cvService: CvServiceService,
    private activateRoute: ActivatedRoute,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      (parm) => {
        this.leIndice = parm
      })
      this.cvService.ItemSubject.subscribe(
        (personne) => this.thePersone = personne
      )
      console.log(this.thePersone)
  //   console.log(this.leIndice)
  //   console.log(this.DetailList[this.leIndice])
  }

  Delete() {
    const LINK=['cv']
    this.DetailList.splice(this.leIndice,1)
    this.route.navigate(LINK)
  }

}
