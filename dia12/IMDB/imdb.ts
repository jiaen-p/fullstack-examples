
import {Movie} from "./Movie";
import * as fs from "fs-extra"
export class Imdb{
    public peliculas: Movie[];
    constructor(peliculas: Movie[]){
        this.peliculas = peliculas;
    }
    public toJSON(){
        let json = {'peliculas': this.peliculas}
        return json;
    }
    public escribirEnFicheroJson(nombre:string){
        fs.writeJsonSync("./" + nombre + ".json", this.toJSON())
    }
    public obtenerInstanciaIMSB(nombreFichero: string):Imdb{
        this.peliculas = fs.readJsonSync("./" + nombreFichero + ".json")
        return this
    }
}