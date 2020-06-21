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
    mostrarTodos(){
        console.log(
            "Nombre:",this.first_name, 
            "\nApellido:", this.last_name, 
            "\nPeso:",this.weight, 
            "\nEdad:", this.age,
            "\nColor de ojos:", this.color_eyes,
            "\nColor de pelo:", this.color_hair,
            "\nAltura:", this.heigth,
            "\nAño de nacimiento:", this.anyo_nacimiento
        )
    }
}


let p1 = new Persona(18, 1.7, 70, "dark", "brown", "Jiaen", "Pan", 1994)

p1.mostrarTodos()