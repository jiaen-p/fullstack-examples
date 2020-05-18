class Coche {
    constructor(marca, modelo, cambio, color, num_puertas, num_cilindros, combustible ){
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.cambio = cambio
        this.num_puertas = num_puertas
        this.num_cilindros = num_cilindros
        this.combustible = combustible
    }
    getMarca(){
        return this.marca
    }
    setMarca(marca){
        this.marca = marca 
    }
    getModelo(){
        return this.modelo
    }
    setModelo(modelo){
        this.modelo = modelo
    }
    getColor(){
        return this.color
    }
    setColor(color){
        this.color = color
    }
    getCambio(){
        return this.cambio
    }
    setCambio(cambio){
        this.cambio = cambio
    }
    getNumPuertas(){
        return this.num_puertas
    }
    setNumPuertas(puertas){
        this.num_puertas = puertas
    }
    getNumCilindros(){
        return this.num_cilindros
    }
    setNumCilindros(cilindros){
        this.num_cilindros = cilindros
    }
    getCombustible(){
        return this.combustible
    }
    setCombustible(combustible){
        this.combustible = combustible
    }
}
module.exports = Coche