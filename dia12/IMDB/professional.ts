export class Professional{
    public name:string;
    public age: number;
    public genre: string;
    public weight: number;
    public height: number;
    public hairColor: string;
    public eyeColor: string;
    public race: string;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNum: number;
    public profession: string;

    constructor(name:string, age: number, genre: string, weight: number, height: number, 
        hairColor: string, eyeColor: string, race: string, isRetired: boolean, nationality: string,
        oscarsNum: number, profession: string){
            this.name = name
            this.age = age
            this.genre = genre
            this.weight = weight
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
        console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Genre: ${this.genre}
        Weigth: ${this.weight}
        Height: ${this.height}
        Hair Color: ${this.hairColor}
        Eye Color: ${this.hairColor}
        Race: ${this.race}
        Is Retired: ${this.isRetired}
        Nationality: ${this.nationality}
        Oscars: ${this.oscarsNum}
        Profession: ${this.profession}
        `);
    }
}