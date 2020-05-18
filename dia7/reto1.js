class Persona{
    constructor(age, heigth, weight, color_hair, color_eyes, first_name, last_name){
        this.age = age
        this.heigth = heigth
        this.weight = weight
        this.color_eyes = color_eyes
        this.color_hair = color_hair
        this.first_name = first_name
        this.last_name = last_name
    }
    imc(){
        return this.weight / Math.pow(this.heigth, 2)
    }
}


let p1 = new Persona(18, 1.7, 70, "dark", "brown", "Jiaen", "Pan")

console.log(p1.imc())