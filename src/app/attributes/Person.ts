export class Person {
  Name:string
  FirstName:string
  Occupation:string
  Image:string
  constructor(
    public name:string,
    public firstname:string,
    public occupation:string,
    public image:string
  ) {
    this.Name = name
    this.FirstName = firstname
    this.Occupation = occupation
    this.Image = image
  }
}
