import { Person } from './person'
import { Calendar } from './calendar'
let p1: Person = new Person("James", 42, "Sesame st")
let p2: Person = new Person("Money Penny", 30, "Ice")
let c1: Calendar = new Calendar([p1,p2])
c1.printCalendar()
