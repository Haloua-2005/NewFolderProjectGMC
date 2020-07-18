export class Person {
  Name:string
  FirstName:string
  Occupation:string
  constructor(
    public name:string,
    public firstname:string,
    public occupation:string
  ) {
    this.Name = name
    this.FirstName = firstname
    this.Occupation = occupation
  }
}
