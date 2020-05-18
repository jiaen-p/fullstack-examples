class Concesionario {
    constructor(coches, nombre_concesionario, direccion){
        this.coches = coches
        this.nombre_concesionario = nombre_concesionario
        this.direccion = direccion
    }
    getCoches (){
        let res = []
        this.coches.forEach( coche => {
            res.push( coche.getModelo() )
        })
        return res
    }
    setCoches(coches){
        this.coches = coches
    }
    getNombreConcesionario(){
        return this.nombre_concesionario
    }
    setNombreConcesionario(nombre){
        this.nombre_concesionario = nombre
    }
    getDireccion(){
        return this.direccion
    }
    setDireccion(direccion){
        this.direccion = direccion
    }
}

module.exports = Concesionario