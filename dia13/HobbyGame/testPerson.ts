import { Person } from './Person'

let p1 = new Person("Juan", "Español", "manager", 15)
let p2 = new Person("Pedro", "Español", "manager", 15)
console.log (p1.samePerson(p2))

p1.print()

console.log(p2.toString())

console.log( p1.getName() + '\n' + p1.getNationality() + '\n' + p1.getProfession() + '\n' + p1.getExperienceYears())