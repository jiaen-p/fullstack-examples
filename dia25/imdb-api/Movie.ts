import { Professional } from "./Profesional"

export class Movie{
    public title: string
    public releaseYear: number
    public actors: Professional[]
    public nationality: string
    public director: Professional
    public writer: Professional
    public language: string
    public platform: string
    public isMCU: boolean
    public mainCharacterName: string
    public producer: string
    public distributor: string
    public url:string
    public genre:string
    public id: number
    constructor(title: string,actors: Professional[], releaseYear: number, nationality: string, genre: string, director: Professional, url: string, id:number){
        this.title = title
        this.actors = actors
        this.releaseYear = releaseYear
        this.nationality = nationality
        this.genre = genre
        this.director = director
        this.url = url
        this.id = id
    }
    public print():string{
        let actors = ''
        this.actors.forEach(actor => {
            actors += actor.print()
        })
        let text = `
    Title: ${this.title}
    Year released: ${this.releaseYear}
    Nationality: ${this.nationality}
    Actor: ${actors}
    Director: ${this.director.print()}
        `
        return (text)
    }
}
