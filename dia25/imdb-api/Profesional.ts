export class Professional{
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
    public id: number;
    constructor(name:string, age: number, genre: string, wheight: number, height: number, 
        hairColor: string, eyeColor: string, race: string, isRetired: boolean, nationality: string,
        oscarsNum: number, profession: string, id:number){
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
            this.id = id
    }
    public print(){
        return (`
        Name: ${this.name}
        Id: ${this.id}
        
        `);
    }
    public toJson():object{
        return this
    }
}