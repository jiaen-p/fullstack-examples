class Persona{
    constructor(age, heigth, weight, color_hair, color_eyes, first_name, last_name, anyo_nacimiento){
        this.age = age
        this.heigth = heigth
        this.weight = weight
        this.color_eyes = color_eyes
        this.color_hair = color_hair
        this.first_name = first_name
        this.last_name = last_name
        this.anyo_nacimiento = anyo_nacimiento
    }
    imc(){
        return this.weight / Math.pow(this.heigth, 2)
    }
    edad(anyo_actual){
        return anyo_actual - this.anyo_nacimiento
    }
}


let p1 = new Persona(18, 1.7, 70, "dark", "brown", "Jiaen", "Pan", 1994)

console.log(p1.edad(2020))