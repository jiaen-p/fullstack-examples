class Movie{
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
    constructor(title: string,actors: Professional[], releaseYear: number, nationality: string, genre: string, director: Professional, url: string){
        this.title = title
        this.actors = actors
        this.releaseYear = releaseYear
        this.nationality = nationality
        this.genre = genre
        this.director = director
        this.url = url
    }
    public print(){
        let text = `
        Title: ${this.title}
        Year released: ${this.releaseYear}
        Nationality: ${this.nationality}
        Actor: : ${this.actors.forEach(actor => actor.print())}
        Director: ${this.director.print()}
        Writer: ${this.writer.print()}
        Language: ${this.language}
        Platform: ${this.platform}
        Is it MCU: ${this.isMCU}
        Main character name: ${this.mainCharacterName}
        Producer: ${this.producer}
        Distrubuted by: ${this.distributor}
        `
        console.log(text)
    }
}

class Imdb{
    public peliculas: Movie[];
    constructor(peliculas: Movie[]){
        this.peliculas = peliculas;
    }
    public toJSON(){
        let json = {'peliculas': this.peliculas}
        return json;
    }
}
class Professional{
    public name:string;
    public age: number;
    public genre: string;
    public wheight: number;
    public height: number;
    public hairColor: string;
    public eyeColor: string;
    public race: string;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNum: number;
    public profession: string;

    constructor(name:string, age: number, genre: string, wheight: number, height: number, 
        hairColor: string, eyeColor: string, race: string, isRetired: boolean, nationality: string,
        oscarsNum: number, profession: string){
            this.name = name
            this.age = age
            this.genre = genre
            this.wheight = wheight
            this.height = height
            this.hairColor = hairColor
            this.eyeColor = eyeColor
            this.race = race
            this.isRetired = isRetired
            this.nationality = nationality
            this.oscarsNum = oscarsNum
            this.profession = profession
    }
    public print(){
        return this;
    }
}

// --------------------------------



let actors:Professional[] = []
function pusha(){
    let actor = new Professional(
        <string>$("#actorName").val(),
        <number>$("#actorAge").val(), 
        <string>$("#actorGender").val(),
        <number>$("#actorWeight").val(), 
        <number>$("#actorHeight").val(),
        <string>$("#actorHairColor").val(), 
        <string>$("#actorEyeColor").val(),  
        <string>$("#actorRace").val(),
        $("#actorIsRetired").val() === "yes", 
        <string>$("#actorNationality").val(),
        <number>$("#actorNumOsc").val(), "Actor"
    )
    actors.push(actor)
    $("#actorName").val('')
    $("#actorAge").val(NaN)
    $("#actorGender").val('')
    $("#actorWeight").val(NaN)
    $("#actorHeight").val(NaN)
    $("#actorHairColor").val('')
    $("#actorEyeColor").val('')
    $("#actorRace").val('')
    $("#actorNationality").val('')
    $("#actorNumOsc").val(NaN)
}
function adda(){
    pusha();
    let director = new Professional(
        <string>$("#directorName").val(),
        <number>$("#directorAge").val(), 
        <string>$("#directorGender").val(),
        <number>$("#directorWeight").val(), 
        <number>$("#directorHeight").val(),
        <string>$("#directorHairColor").val(), 
        <string>$("#directorEyeColor").val(),  
        <string>$("#directorRace").val(),
        $("#directorIsRetired").val() === "yes", 
        <string>$("#directorNationality").val(),
        <number>$("#directorNumOsc").val(), "director"
    )
    let movie = new Movie(
        <string>$("#movieTitle").val(), actors,
        <number>$("#releaseYear").val(),
        <string>$("#nationality").val(),
        <string>$("#genre").val(),
        director,
        <string>$("#url").val()
    )
    // imdb.peliculas.push(movie) ------------------> guardar pelicula en window.localStorage
    localStorage.setItem("newPelicula", JSON.stringify(movie))
    console.log(localStorage.getItem("newPelicula"))
    $("#directorName").val('')
    $("#directorAge").val(null)
    $("#directorGender").val('')
    $("#directorWeight").val(null)
    $("#directorHeight").val(null)
    $("#directorHairColor").val('')
    $("#directorEyeColor").val('')
    $("#directorRace").val('')
    $("#directorNationality").val('')
    $("#directorNumOsc").val(null)
    $("#movieTitle").val('')
    $("#releaseYear").val(null)
    $("#nationality").val('')
    $("#genre").val('')
    $("#url").val('')
}