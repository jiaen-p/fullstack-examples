import { Person } from './person'
export class Calendar{
    public people: Person[]
    constructor(people: Person[]){
        this.people = people
    }
    public printCalendar(){
        this.people.forEach( people =>{
            people.printName()
            console.log("Vive en",people.getAddress())
            console.log("Ha nacido en el año",people.yearOfBirth(2020))
        })
    }
}

