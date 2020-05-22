export class Pelicula{
    private titulo: string
    private duracion: number
    private edadMin: number
    private director: string
    constructor(titulo: string, duracion: number, edadMinima: number, director: string){
        this.titulo = titulo
        this.duracion = duracion
        this.edadMin = edadMinima
        this.director = director
    }
    getTitulo():string{
        return this.titulo
    }
    getDuracion():number{
        return this.duracion
    }
    getEdadMin():number{
        return this.edadMin
    }
    getDirector():string{
        return this.director
    }
}