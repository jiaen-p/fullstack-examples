
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
    public static obtenerInstanciaIMSB(nombreFichero: string):Imdb{
        return new Imdb( fs.readJsonSync("./" + nombreFichero + ".json") )
    }
}