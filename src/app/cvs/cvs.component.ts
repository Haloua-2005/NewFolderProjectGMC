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
  public theCVlist
  detailbool:boolean = false
  HpLbool:boolean = !this.detailbool
  theHireList

  constructor(
    private cvservice:CvServiceService,
    private hireservice:HiringServiceService,
    private router:Router
  ) {
    this.theCVlist = [
      new Person ("Halouani","Ismail",548546,"Web Devloper","https://scontent.fnbe1-1.fna.fbcdn.net/v/t1.0-9/98291306_1529690043868989_530102683491631104_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=9eV-xAV0JE8AX_MbfED&_nc_ht=scontent.fnbe1-1.fna&oh=59a4fa6edeb17f891e68fd275ce3a01c&oe=5F70FCCF",15),
      new Person ("Dae Hoon","Lee",87456,"Taekwondo Player","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8cUWC0Uai1rSXCo2h8zrVVGXWmGKRydEdJw&usqp=CAU",28)
  ]
  this.theHireList = this.cvservice.CVlists
  }


  ngOnInit(): void {
    console.log(this.theHireList)
    this.cvservice.getPersone().subscribe(
      (personne) => {
        this.theHireList.push(personne)
        console.log(personne)
      },
      (error) => {
        this.theHireList = this.cvservice.getFakePersone();
        alert('Les donnés sont Faux ! Veuillez mettre vos donnés correctement .')
      }
    )
  }


  goLink(value) {
    const LINK=['cv/details',value]
    this.router.navigate(LINK)
    this.detailbool = true
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
