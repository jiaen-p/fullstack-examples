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
let alex = new Professional('alex', 28, 'masc', 76, 183, 'brown', 'brown', 'european', true, 'spanish', 0, 'b-ball coach');
let jiaen = new Professional('jiaen', 28, 'masc', 76, 186, 'black', 'brown', 'asiatic', false, 'spanish', 3, 'b-ball coach');
let mmm = new Professional('mmm', 28, 'masc', 76, 183, 'brown', 'brown', 'european', true, 'spanish', 0, 'b-ball coach')
let m1 = new Movie("Infinity War",[jiaen,alex], 2018, "USA", "Action", mmm,"https://lumiere-a.akamaihd.net/v1/images/eu_avr-3_showcase_hero_v2_m_5acaf64a.jpeg?region=0,0,750,668")
let m2 = new Movie("Guns Akimbo",[alex], 2020, "UK, New Zealand and West Germany", "Comedy and Action", mmm,"https://m.media-amazon.com/images/M/MV5BNzU3ZTI1OTktNjVkNy00OWEzLWIyNzAtMWQ5YjRkZDU1ZjAxXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg")
let imdb = new Imdb([m1,m2])
$(document).ready(() => {
    $("#page").append(() => {
        $("#home").addClass("active")
        return Home()
    })
    $("#home").click( () => {
        $("#movies").removeClass("active")
        $("#contribute").removeClass("active")
        $("#home").addClass("active")
        $("#page").html(Home())
    })
    $("#movies").click(()=> {
        $("#home").removeClass("active")
        $("#contribute").removeClass("active")
        $("#movies").addClass("active")
        $("#page").html(Movies())
    })
    $("#contribute").click( ()=> {
        $("#home").removeClass("active")
        $("#movies").removeClass("active")
        $("#contribute").addClass("active")
        $("#page").html(Contribute())
    })
    $("#contribute-home").click( ()=> {
        $("#home").removeClass("active")
        $("#movies").removeClass("active")
        $("#contribute").addClass("active")
        $("#page").html(Contribute())
    })
})

function Home():string{
    return (`
    <div class="row">
        <div class="col card ">
            <h1 class="display-4">Welcome to the film database!</h1>
            <p class="lead">All the info you need in one place</p>
            <hr class="my-4">
            <p>If you would like to add more movies, you can help by clicking the button bellow</p>
            <p class="lead">
                <a onclick=contribute() class="btn btn-primary btn-lg" href="#" role="button"><i class="fas fa-plus"></i> Add to our database</a>
            </p>
        </div>
    </div>
    `)
}

function Movies():string{
    let html:string = ''
    imdb.peliculas.forEach(pelicula => {
        let actorsInfo:string = ''
        pelicula.actors.forEach(actor => {
            actorsInfo += `
            <li>${actor.name}</li>
            `
        });
        html += `
        <div class="card col-md-6 col-sm-12">
            <img src="${pelicula.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${pelicula.title}</h5>
                <p class="card-text">Director: ${pelicula.director.name}</p>
                <p class="card-text">Nationality: ${pelicula.nationality}</p>
                <p class="card-text">Release Year: ${pelicula.releaseYear}</p>
                <p class="card-text">Genre: ${pelicula.genre}</p>
                <p class="card-text">Actors:</p>
                <ul class="">${actorsInfo}</ul>
            </div>
        </div>
        `
    })
    
    return("<div class='row'> " + html + "</div>")
}

function Contribute():string{

    return (`
    <form>
        <div class="form-group">
            <label for="movieTitle">Movie Title</label>
            <input type="email" class="form-control" id="movieTitle">
        </div>
        <div class="form-group">
            <label for="releaseYear">Year released</label>
            <input type="number" class="form-control" id="releaseYear">
        </div>
        <div class="form-group">
            <label for="nationality">Nationality</label>
            <input type="text" class="form-control" id="nationality">
        </div>
        <div class="form-group">
            <label for="genre">Genre</label>
            <input type="text" class="form-control" id="genre">
        </div>
        <div class="form-group">
            <label for="url">Image url</label>
            <input type="text" class="form-control" id="url">
        </div>
        <br>
        <hr>
        <br>
        <div class="form-group">
            <label for="directorName">Director name</label>
            <input type="text" class="form-control" id="directorName">
        </div>
        <div class="form-group">
            <label for="directorAge">Director age</label>
            <input type="number" class="form-control" id="directorAge">
        </div>
        <div class="form-group">
            <label for="directorGender">Director gender</label>
            <input type="text" class="form-control" id="directorGender">
        </div>
        <div class="form-group">
            <label for="directorWeight">Director weight</label>
            <input type="number" class="form-control" id="directorWeight">
        </div>
        <div class="form-group">
            <label for="directorHeight">Director height</label>
            <input type="number" class="form-control" id="directorHeight">
        </div>
        <div class="form-group">
            <label for="directorHairColor">Director hair color</label>
            <input type="text" class="form-control" id="directorHairColor">
        </div>
        <div class="form-group">
            <label for="directorEyeColor">Director eye color</label>
            <input type="text" class="form-control" id="directorEyeColor">
        </div>
        <div class="form-group">
            <label for="directorRace">Director race</label>
            <input type="text" class="form-control" id="directorRace">
        </div>
        <label for="directorIsRetired">Director retired</label>
        <div class="form-group" id="directorIsRetired">
            <select type="text" class="form-control" id="directorIsRetired">
            <option>no</option>    
            <option>yes</option>
            </select>
        </div>
        <div class="form-group">
            <label for="directorNationality">Director nationality</label>
            <input type="text" class="form-control" id="directorNationality">
        </div>
        <div class="form-group">
            <label for="directorNumOsc">Director number of Oscars won</label>
            <input type="number" class="form-control" id="directorNumOsc">
        </div>
        <br>
        <hr>
        <br>
        <form id="actor-form">
            <div class="form-group">
                <label for="actorName">actor name</label>
                <input type="text" class="form-control" id="actorName">
            </div>
            <div class="form-group">
                <label for="actorAge">actor age</label>
                <input type="number" class="form-control" id="actorAge">
            </div>
            <div class="form-group">
                <label for="actorGender">actor gender</label>
                <input type="text" class="form-control" id="actorGender">
            </div>
            <div class="form-group">
                <label for="actorWeight">actor weight</label>
                <input type="number" class="form-control" id="actorWeight">
            </div>
            <div class="form-group">
                <label for="actorHeight">actor height</label>
                <input type="number" class="form-control" id="actorHeight">
            </div>
            <div class="form-group">
                <label for="actorHairColor">actor hair color</label>
                <input type="text" class="form-control" id="actorHairColor">
            </div>
            <div class="form-group">
                <label for="actorEyeColor">actor eye color</label>
                <input type="text" class="form-control" id="actorEyeColor">
            </div>
            <div class="form-group">
                <label for="actorRace">actor race</label>
                <input type="text" class="form-control" id="actorRace">
            </div>
            <label for="actorIsRetired">actor retired</label>
            <div class="form-group" id="actorIsRetired">
                <select type="text" class="form-control" id="actorIsRetired">
                    <option>no</option>    
                    <option>yes</option>
                </select>
            </div>
            <div class="form-group">
                <label for="actorNationality">actor nationality</label>
                <input type="text" class="form-control" id="actorNationality">
            </div>
            <div class="form-group">
                <label for="actorNumOsc">actor number of Oscars won</label>
                <input type="number" class="form-control" id="actorNumOsc">
            </div>
            <button id="add-actor" onclick=pushActor() type="button" class="btn btn-primary">Add Another Actor</button>
        </form>
        <br>
        <hr>
        <br>
        <button id="add-movie" onclick=addMovie() type="button" class="btn btn-primary">Submit Movie</button>
    </form>
    
    `)
}
function contribute(){
    $("#home").removeClass("active")
    $("#movies").removeClass("active")
    $("#contribute").addClass("active")
    $("#page").html(Contribute())
}
// --------------------------------
// form logic
let actorArray:Professional[] = []
function pushActor(){
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
    actorArray.push(actor)
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
function addMovie(){
    pushActor();
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
        <string>$("#movieTitle").val(), actorArray,
        <number>$("#releaseYear").val(),
        <string>$("#nationality").val(),
        <string>$("#genre").val(),
        director,
        <string>$("#url").val()
    )
    imdb.peliculas.push(movie)
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