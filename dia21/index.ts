enum profession{
    developer = "developer",
    tester = "tester",
    manager = "manager",
    director = "director"
}
type Profesion = keyof typeof profession
class Person{
    private name: string
    private nationality: string
    private profession: Profesion
    private experienceYears: number
    constructor(name: string, nationality: string, profession: Profesion, experienceYears: number){
        this.name = name
        this.nationality = nationality
        this.profession = profession
        this.experienceYears = experienceYears
    }
    public samePerson(p:Person):boolean{
        return this.name === p.getName() && this.nationality === p.getNationality() && this.profession === p.getProfession() && this.experienceYears === p.getExperienceYears()
    }
    public print(){
        console.log(`
        Nombre: ${this.name}
        Nacionalidad: ${this.nationality}
        Profesion: ${this.profession}
        Años de experiencia: ${this.experienceYears}
        `)
    }
    public toString():string{
        let s:string = ''
        s = this.name + ' ' + this.nationality + ' ' + this.profession + ' ' + this.experienceYears + ' '
        return s
    }
    public getName():string{
        return this.name
    }
    public setName(name:string){
        this.name = name
    }
    public getNationality():string{
        return this.nationality
    }
    public setNationality(nationality:string){
        this.nationality = nationality
    }
    public getProfession():Profesion{
        return this.profession
    }
    public setProfession(profession:Profesion){
        this.profession = profession
    }
    public getExperienceYears():number{
        return this.experienceYears
    }
    public setExperienceYears(experienceYears:number){
        this.experienceYears = experienceYears
    }
    public static Instance(json){
        return new Person(json.name, json.nationality, json.profession, json.experienceYears)
    }
}

// ---------------------------------------------------------------------------------------

enum StorageDevice{
    dvd = "dvd",
    cartucho = "cartucho",
    tarjeta = "tarjeta",
    cd = "cd", 
    bluray = "bluray"
}
type StorageDevices = keyof typeof StorageDevice

class Platform{
    private name: string
    private releaseYear: number
    private company: string
    private nBits: number
    private generation: number
    private hasHD: boolean
    private hdSize: number
    private hasInternetConnection: boolean
    private storageDevice: StorageDevices
    private color: string
    constructor(name: string, releaseYear:number, company:string , nBits: number, generation: number,
        hasHD: boolean, hdSize: number, hasInternetConnection: boolean, 
        storageDevice: StorageDevices, color: string){
        this.name = name
        this.releaseYear = releaseYear
        this.company = company
        this.nBits = nBits
        this.generation = generation
        this.hasHD = hasHD
        this.hdSize = hdSize
        this.hasInternetConnection = hasInternetConnection
        this.storageDevice = storageDevice
        this.color = color
    }
    samePlatform(p:Platform){
        return this.name === p.name && this.releaseYear === p.releaseYear && this.company === p.company
            && this.nBits === p.nBits && this.generation === p.generation && this.hasHD === p.hasHD &&
            this.hdSize === p.hdSize && this.hasInternetConnection === p.hasInternetConnection
            && this.storageDevice === p.storageDevice && this.color === p.color
    }
    print(){
        console.log(this.toString())
    }
    toString():string{
        return (`
        Name: ${this.name}
        Year released: ${this.releaseYear}
        Company: ${this.company}
        Number of bits: ${this.nBits}
        Generation: ${this.generation}
        Has HD: ${this.hasHD}
        HD size(GB): ${this.hdSize}
        Has Internet Connection: ${this.hasInternetConnection}
        Type of storage: ${this.storageDevice}
        Color: ${this.color}
        `)
    }
    getName():string{
        return this.name
    }
    setName(name:string){
        this.name = name
    }
    getReleaseYear():number{
        return this.releaseYear
    }
    setReleaseYear(releaseYear: number){
        this.releaseYear = releaseYear
    }
    getCompany():string{
        return this.company
    }
    setCompany(company:string){
        this.company = company
    }
    getNBits():number{
        return this.nBits
    }
    setNBits(nBits: number){
        this.nBits = nBits
    }
    getGeneration():number{
        return this.generation
    }
    setGeneration(generation: number){
        this.generation = generation
    }
    getHasHD():boolean{
        return this.hasHD
    }
    setHasHD(hasHD: boolean){
        this.hasHD = hasHD
    }
    getHdSize():number{
        return this.hdSize
    }
    setHdSize(hdSize:number){
        this.hdSize = hdSize
    }
    getHasInternetConnection():boolean{
        return this.hasInternetConnection
    }
    setHasInternetConnection(hasInternetConnection: boolean){
        this.hasInternetConnection = hasInternetConnection
    }
    getStorageDevice():StorageDevices{
        return this.storageDevice
    }
    setStorageDevice(storageDevice: StorageDevices){
        this.storageDevice = storageDevice
    }
    getColor():string{
        return this.color
    }
    setColor(color:string){
        this.color = color
    }
}
// ---------------------------------------------------------------------------------------
type Scores = 0|1|2|3|4|5|6|7|8|9|10;
class Videogame{
    private title: string
    private releaseYear: number
    private developers: Person[]
    private nationality: string
    private director: Person
    private languages: string[]
    private platforms: Platform[]
    private price: number
    private score: Scores
    private url: string
    constructor(title: string, releaseYear: number, developers: Person[], 
        nationality: string, director: Person, languages: string[], platforms: Platform[]
        , price: number, score: Scores, url: string){
            this.title = title
            this.releaseYear = releaseYear
            this.developers = developers
            this.nationality = nationality
            this.director = director
            this.languages = languages
            this.platforms = platforms
            this.price = price
            this.score = score
            this.url = url
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
    public getUrl():string{
        return this.url
    }
    public setUrl(url:string){
        this.url = url
    }
}
// ---------------------------------------------------------------------------------------
class HobbyGame{
    private games: Videogame[]
    constructor( games: Videogame[]){
        this.games = games
    }
    public toJson():object{
        return {"Games": this.games }
    }
    public allGamesPriceFrom(p: Platform): number{
        let total:number = 0
        this.games.forEach(game => {
            if (game.availableInPlatform(p)){
                total += game.getPrice()
            }
        })
        return total
    }
    public allGamesPrice():number{
        let total:number = 0
        this.games.forEach(game => {
            total += game.getPrice()
        })
        return total
    }
    public allGamesInLanguage(language:string): Videogame[]{
        let games: Videogame[] = []
        this.games.forEach(game => {
            if( game.availableInLanguage(language)){
                games.push(game)
            }
        })
        return games
    }
    public allGamesDevelopedBy(dev: Person): Videogame[]{
        let games: Videogame[] = []
        this.games.forEach(game => {
            if( game.developedBy(dev)){
                games.push(game)
            }
        })
        return games
    }
    public allGamesAvailableForPlatformAndInLanguague(p:Platform, language:string):Videogame[]{
        let games: Videogame[] = []
        this.games.forEach(game => {
            if(game.availableInLanguage(language) && game.availableInPlatform(p)){
                games.push(game)
            }
        })
        return games
    }
    public allGamesAvailableForPlatformAndInLanguagueAndGreterThanFive(p:Platform, language:string){
        let games: Videogame[] = []
        this.games.forEach(game => {
            if(game.availableInLanguage(language) && game.availableInPlatform(p) && game.getScore() > 5){
                games.push(game)
            }
        })
        return games
    }
    public getGames(): Videogame[] {
        return this.games
    }
    public setGames(value: Videogame[]) {
        this.games = value
    }
}
// ---------------------------------------------------------------------------------------


let p1 = new Person("Juan", "Español", "developer", 15)
let p2 = new Person("Pablo", "Español", "developer", 10)
let p3 = new Person("Juana", "Francesa", "developer", 20)
let d1 = new Person("Nana", "UK", "director", 5)

let pcmr = new Platform("PC", 2020, "Any", 64, 10, true, 100, true, "cd", "gris")
let ps4 = new Platform("ps4", 2015, "sony", 64, 4, true, 120, true, "bluray", "black")
let sw = new Platform("Switch", 2016, "Nintendo", 64, 4, true, 32, true, "tarjeta", "negro")

let tk = new Videogame ("tekken 7",2018, [p1,p2], "Japan", d1, ["English", "Spanish", "Japanese"], [ps4,pcmr,sw], 40, 8, "https://cdn.gamefy.store/media/__sized__/product_image/vert_cover/Tekken-7-HD-Wallpapers-whb-crop-c0-5__0-5-636x700-85.jpg")
let re = new Videogame ("residen evil", 2020, [p1,p3], "Japan", d1, ["Russian", "Japanese", "Polska","English"], [ps4,sw], 60, 4, "https://www.residentevil.net/pc/img/top/bnr_campaign_en.jpg")
let mk = new Videogame("Mario Kart 8", 2017, [p2,p3], "Japan", d1, ["English", "Spanish", "Portuguese", "French"], [sw], 50, 7,"https://s3.gaming-cdn.com/images/products/2615/orig/mario-kart-8-deluxe-switch-cover.jpg")
let store = new HobbyGame([tk,mk,re])


// ---------------------------------------------------------------------------------------
let cart: number[] = [] 
$(document).ready(()=>{
    $("#page").html(Home())
    $("#itemNumber").html("0")
    carts();
    $("#Home").click(()=> {
        $("#page").html(Home())
    })
    $("#Store").click(() => {
        $("#page").html(Buy())
    })
    $("#AddGame").click(() => {
        $("#page").html(AddGame())
    })
})
function buyGame(index:number):void{
    cart.push(index)
    $("#itemNumber").html("" + cart.length)
    carts()
}
function carts():void{
    let carts:string =''
    let total = 0
    cart.forEach(i => {
        total += store.getGames()[i].getPrice()
        carts += `
        <div class="dropdown-item " href="#">
            <p>${store.getGames()[i].getTitle()} - ${store.getGames()[i].getPrice()}€</p>
        </div>
        `
    });
    carts += `
        <div class="dropdown-divider"></div>
        <div class="dropdown-item " href="#">
            <p>Total - ${total}€</p>
        </div>
    `
    $("#cart").html(carts)
}
function Home():string{
    let games = ''
    
    store.getGames().forEach((game, index) => {
        let developerName = ''
        game.getDevelopers().forEach(dev => {
            developerName += `
            <li>${dev.getName()}</li>
            `
        })
        let lang = ''
        game.getLanguages().forEach(language => {
            lang += `
                <li>${language}</li>
            `
        })
        let plat = ''
        game.getPlatforms().forEach(platform => {
            plat += `
                <li>${platform.getName()} - ${platform.getCompany()}</li>
            `
        })
        games += `
        <div class="card col-12 col-md-6 col-lg-4 col-xl-3">
            <img src=${game.getUrl()} class="card-img-top" alt="${game.getTitle()}">
            <div class="card-body">
                <h4 class="card-text">Title: ${game.getTitle()}</h4>
                <p class="card-text">Year released: ${game.getReleaseYear()}</p>
                <p class="card-text">Game director: ${game.getDirector().getName()}</p>
                <p class="card-text">Game developers: 
                    <ul>
                        ${developerName}    
                    </ul>
                </p>
                <p class="card-text">Available languages:
                    <ul>
                        ${lang}
                    </ul>
                </p>
                <p class="card-text">Available platforms: 
                    <ul>
                        ${plat}
                    </ul>
                </p>
                <p class="card-text">Score: ${game.getScore()}/10</p>
            </div>
        </div>
        
        `

    })
    let htmlString = `
    <div class="title">
        <h1>Hobby game wiki</h1>
        <h3>Game info</h3>
    </div>
    <div class="games row">
        ${games}
    </div>
    `
    return htmlString
}

function Buy():string{
    let games = ''
    
    store.getGames().forEach((game, index) => {
        games += `
        <div class="card col-12 col-md-6 col-lg-4 col-xl-3">
            <img src=${game.getUrl()} class="card-img-top" alt="${game.getTitle()}">
            <div class="card-body">
                <h4 class="card-text">${game.getTitle()}</h4>
                <p class="card-text">${game.getReleaseYear()}</p>
                <p class="card-text">${game.getPrice()}€</p>
                <button onclick=buyGame(${index}) class="btn btn-primary">Buy</button>
            </div>
        </div>
        
        `

    })
    let htmlString = `
    <div class="title">
        <h1>Hobby game store</h1>
        <h3>You can find you favorite games for a great price.</h3>
    </div>
    <div class="games row">
        ${games}
    </div>
    `
    return htmlString
}
let languages:string[] = []
function addLang(){
    let lan = ''
    languages.push(<string>$("#gamLang").val())
    $("#gamLang").val('')
    languages.forEach(lang => {
        lan += `<li>${lang}</li>`
    })
    $("#addLanguage").html(`${lan}`)  
    $("#gamLang").focus() 
}
let developers: Person[] = []
function addDev():void{
    developers.push(new Person(
        <string>$("#devName").val(),
        <string>$("#devCountry").val(),
        "developer",
        <number>$("#devYears").val()
    ))
    $("#devName").val('')
    $("#devCountry").val('')
    $("#devYears").val(null)
    let dev = ''
    developers.forEach(d => {
        dev += `<li>${d.getName()}</li>`
    })
    $("#addDeveloper").html(dev)
}
function AddGame():string{
    return (`
    <form>
            <br>
            <div class="form-row">
                <div class=" col-sm-12 col-md-3">
                    <input required type="text" id="gamTitle" class="form-control" placeholder="Game Title">
                </div>
                <div class=" col-sm-12 col-md-3">
                    <input required type="number" id="gamYear" class="form-control" placeholder="Year of Release">
                </div>
                <div class=" col-sm-12 col-md-3">
                    <input required type="text" id="gamCountry" class="form-control" placeholder="Country of Origin">
                </div>
                <div class=" col-sm-12 col-md-3">
                    <input required type="text" id="gamUrl" class="form-control" placeholder="Img Url">
                </div>
            </div>
            <br>
            <div class="form-row">
                <div class="col-sm-12 col-md-3">
                    <input required type="number" id="gamScore" class="form-control" placeholder="Game Score (0-10)">
                </div>
                <div class="col-sm-12 col-md-3">
                    <input required type="number" id="gamPrice" class="form-control" placeholder="Price">
                </div>
                <div class="col-sm-12 col-md-3">
                    <input type="text" id="gamLang" class="form-control" placeholder="Language">
                </div>
                <button onclick=addLang() class="btn btn-primary">Add Language</button>
            </div>
            <br>
            <div>
                <p>Languagues already added:</p>
                <ul id="addLanguage">
                   none 
                </ul>
            </div>
            <hr>
            <p class="form-check form-check-inline">Available in platforms:</p>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="ps4">
                <label class="form-check-label" for="inlineCheckbox1">ps4</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="sw">
                <label class="form-check-label" for="inlineCheckbox2">switch</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="pcmr">
                <label class="form-check-label" for="inlineCheckbox3">pc</label>
            </div>
            <hr>
            <div class="form-row">
                <div class="col-sm-12 col-md-3">
                    <input type="text" id="dirName" class="form-control" placeholder="Director Name">
                </div>
                <div class="col-sm-12 col-md-3">
                    <input type="number" id="dirYears" class="form-control" placeholder="Year of Experience">
                </div>
                <div class="col-sm-12 col-md-3">
                    <input type="text" id="dirCountry" class="form-control" placeholder="Country of Origin">
                </div>
            </div>
            <hr>
            <div class="form-row">
                <div class="col-sm-12 col-md-3">
                    <input type="text" id="devName" class="form-control" placeholder="Developer Name">
                </div>
                <div class="col-sm-12 col-md-3">
                    <input type="number" id="devYears" class="form-control" placeholder="Year of Experience">
                </div>
                <div class="col-sm-12 col-md-3">
                    <input type="text" id="devCountry" class="form-control" placeholder="Country of Origin">
                </div>
                <button onclick=addDev() class="btn btn-primary">Add developer</button>
            </div>
            <br>
            <div>
                <p>Added developers name:</p>
                <ul id="addDeveloper">
                    none
                </ul>
            </div>
            <hr>
            
            <button onclick=addGame() type="reset" class="btn btn-primary">Submit</button>
        </form>
    
    `)
}
function addGame():void{
    if($("#gamTitle").val() !== ''){
        let platform:Platform[] = []
        if($("#ps4").is(":checked") ){
            platform.push(ps4)
        }
        if( $("#sw").is(":checked") ){
            platform.push(sw)
        }
        if( $("#pcmr").is(":checked")){
            platform.push(pcmr)
        }
        let videogame = new Videogame(
            <string>$("#gamTitle").val(),
            Number($("#gamYear").val()),
            developers,
            <string>$("#gamCountry").val(),
            new Person(<string>$("#dirName").val(), <string>$("#dirCountry").val(),"director", <number>$("#dirYears").val()),
            languages,
            platform,
            Number($("#gamPrice").val()),
            <Scores>Number($("#gamScore").val()),
            <string>$("#gamUrl").val()
        )
        if($("#devName").val() !== ''){
            developers.push(new Person(
                <string>$("#devName").val(),
                <string>$("#devCountry").val(),
                "developer",
                Number($("#devYears").val())
            ))
        }
        console.log(videogame.getPrice())
        store.setGames([...store.getGames(), videogame])
    }
}