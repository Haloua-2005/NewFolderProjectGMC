import { Component, OnInit, Output, Input } from '@angular/core';
import { CvServiceService } from '../Services/cv-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../attributes/Person';
import { HiringServiceService } from '../Services/hiring-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() theList;

  DetailList = this.cvService.CVlists
  leIndice;
  thePersone:Person;

  constructor(
    private cvService: CvServiceService,
    private hireservice:HiringServiceService,
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

  HirePerson() {
    this.cvService.ItemSubject.subscribe(
      (personne) => {
        this.hireservice.Push(personne)
        this.theList.splice(this.leIndice,1)
      }
    )
    this.cvService.onClick(this.theList[this.leIndice])
  }

  Delete() {
    this.theList.splice(this.leIndice,1)
  }

}
