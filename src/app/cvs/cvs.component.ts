import { Component, OnInit } from '@angular/core';
import { CvServiceService } from '../Services/cv-service.service';
import { HiringServiceService } from '../Services/hiring-service.service';
import { Person } from '../attributes/Person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cvs',
  templateUrl: './cvs.component.html',
  styleUrls: ['./cvs.component.css']
})
export class CVsComponent implements OnInit {

  adam= new Person("EL Ichi","Adem","Engeener","data:image/jpeg;base64,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")
  Leo = new Person("Messi","Leonel","Footballer","data:image/jpeg;base64,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")


  theCVlist:any = [this.adam,this.Leo]

  theHireList:any = this.cvservice.CVlists

  constructor(
    private cvservice:CvServiceService,
    private hireservice:HiringServiceService,
    private router:Router
  ) { }

    push(indice) {
      this.hireservice.Push(this.theCVlist[indice])
      this.theCVlist.splice(indice,1)
    }

  ngOnInit(): void {
    console.log(this.theHireList)
  }

  goLink(value) {
    const LINK=['details',value]
    this.router.navigate(LINK)
  }

  Try = ''

  try() {
    const LINK=['ngStyle']
    if (this.Try === "Style") {
      this.router.navigate(LINK)
    }else{
      this.Try = "Please Retry"
    }

  }

  goTO() {
    const LINK=['cv/ngIf']
    this.router.navigate(LINK)
  }
}
