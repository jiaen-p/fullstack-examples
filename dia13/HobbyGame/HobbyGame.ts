import { Person } from './Person'
import { Platform } from './Platform'
import { Videogame } from './Videogame'
import * as fs from 'fs-extra'
export class HobbyGame{
    private games: Videogame[]
    constructor( games: Videogame[]){
        this.games = games
    }
    public writeOnJSONFile(filename:string){
        fs.writeFile('./' +  filename + '.json', JSON.stringify(this.games))
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
    public static getInstance(name:string):HobbyGame{
        return new HobbyGame( fs.readJsonSync('./' + name + '.json') ) 
    }
}