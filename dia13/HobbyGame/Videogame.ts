import { Person } from './Person'
import { Platform } from './Platform'
type Scores = 0|1|2|3|4|5|6|7|8|9|10;
export class Videogame{
    private title: string
    private releaseYear: number
    private developers: Person[]
    private nationality: string
    private director: Person
    private languages: string[]
    private platforms: Platform[]
    private price: number
    private score: Scores
    
    constructor(title: string, releaseYear: number, developers: Person[], 
        nationality: string, director: Person, languages: string[], platforms: Platform[]
        , price: number, score: Scores){
            this.title = title
            this.releaseYear = releaseYear
            this.developers = developers
            this.nationality = nationality
            this.director = director
            this.languages = languages
            this.platforms = platforms
            this.price = price
            this.score = score
    }
    public availableInPlatform(platform: Platform): boolean{
        let res = false
        let i = 0;
        while (!res && i < this.platforms.length){
            res = this.platforms[i].samePlatform(platform)
            i++
        }
        return res
    }
    public developedBy(developer: Person): boolean{
        let res = false
        let i = 0;
        while (!res && i < this.developers.length){
            res = this.developers[i].samePerson(developer)
            i++
        }
        return res
    }
    public availableInLanguage(language: string): boolean{
        let res = false
        let i = 0;
        while (!res && i < this.languages.length){
            res = this.languages[i] === language
            i++
        }
        return res
    }
    public toString(){
        let dev = ''
        this.developers.forEach(d => dev += d.toString() + ', ')
        let plat = ''
        this.platforms.forEach(p => plat += p.toString() + ', ')
        return (`
        Title: ${this.title},
        Released year: ${this.releaseYear},
        Developers: ${dev}
        From: ${this.nationality},
        Directed by: ${this.director.getName()},
        Available in: ${this.languages},
        Available for: ${plat}
        Score: ${this.score},
        Price: ${this.price}
        `)
    }
    public print(){
        console.log(this.toString())
    }
    public getTitle(): string {
        return this.title
    }
    public setTitle(value: string) {
        this.title = value
    }
    public getReleaseYear(): number {
        return this.releaseYear
    }
    public setReleaseYear(value: number) {
        this.releaseYear = value
    }
    public getDevelopers(): Person[] {
        return this.developers
    }
    public setDevelopers(value: Person[]) {
        this.developers = value
    }
    public getNationality(): string {
        return this.nationality
    }
    public setNationality(value: string) {
        this.nationality = value
    }
    public getDirector(): Person {
        return this.director
    }
    public setDirector(value: Person) {
        this.director = value
    }
    public getLanguages(): string[] {
        return this.languages
    }
    public setLanguages(value: string[]) {
        this.languages = value
    }
    public getPlatforms(): Platform[] {
        return this.platforms
    }
    public setPlatforms(value: Platform[]) {
        this.platforms = value
    }
    public getPrice(): number {
        return this.price
    }
    public setPrice(value: number) {
        this.price = value
    }
    public getScore(): Scores {
        return this.score
    }
    public setScore(value: Scores) {
        this.score = value
    }
}