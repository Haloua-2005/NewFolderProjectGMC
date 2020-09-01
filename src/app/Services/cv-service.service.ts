import { Injectable } from '@angular/core';
import { Person } from '../attributes/Person';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_LINK='https://immense-citadel-91115.herokuapp.com/api/personnes'
@Injectable({
  providedIn: 'root'
})
export class CvServiceService {

  CVlists;

  ItemSubject = new Subject<Person>()

  onClick(personne: Person) {
    this.ItemSubject.next(personne)
  }

    getFakePersone():Person[] {
    return this.CVlists
  }

  getPersone():Observable<Person[]> {
    console.log('IT WORKS !')
    return this.http.get<Person[]>(API_LINK)
  }

  getNewPerson(personne:Person) {
    const token = localStorage.getItem("token")
    if (token) {
      const headers = new HttpHeaders().set('Authorisation', token)
      return this.http.post(API_LINK, personne, {headers})
    }
    return this.http.post(API_LINK, personne)
  }

  constructor(
    private http:HttpClient
    ){
      this.CVlists = [
        new Person ("Jordan","Micheal",852695,"BasketBall Player","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbqD5LvW7Yn9zPr2zKKim4itUSE3gjq14PPw&usqp=CAU",57),
        new Person ("Musk","Elon",321907,"co-founder","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2rfgWvBDlosPphdS3SZDS6si66EJQKF1FJg&usqp=CAU",49)
      ]
    }
}
