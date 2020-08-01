import { Component, OnInit } from '@angular/core';
import { CvServiceService } from '../Services/cv-service.service';
import { HiringServiceService } from '../Services/hiring-service.service';
import { Person } from '../attributes/Person';

@Component({
  selector: 'app-cvs',
  templateUrl: './cvs.component.html',
  styleUrls: ['./cvs.component.css']
})
export class CVsComponent implements OnInit {

  adam= new Person("EL Ichi","Adem","Engeener","")
  Leo = new Person("Messi","Leonel","Footballer","")


  theCVlist:any = [this.adam,this.Leo]

  theHireList:any = this.cvservice.CVlists

  constructor(
    private cvservice:CvServiceService,
    private hireservice:HiringServiceService
  ) { }

    push(indice) {
      this.hireservice.Push(this.theCVlist[indice])
      this.theCVlist.splice(indice,1)
    }

  ngOnInit(): void {
  }

}
