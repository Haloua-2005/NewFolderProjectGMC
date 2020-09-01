export class Person {
  Name:string
  FirstName:string
  CIN:number
  Job:string
  Path:any
  Age:number
  constructor(
    private name:string,
    private firstname:string,
    private cin:number,
    private job:string,
    private path:any,
    private age:number,
  ) {
    this.Name = name
    this.FirstName = firstname
    this.CIN = cin
    this.Job = job
    this.Path = path
    this.Age = age
  }
}
