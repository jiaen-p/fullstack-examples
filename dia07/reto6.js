class Persona{
    constructor(age, heigth, weight, color_hair, color_eyes, first_name, last_name, anyo_nacimiento, aficion){
        this.age = age
        this.heigth = heigth
        this.weight = weight
        this.color_eyes = color_eyes
        this.color_hair = color_hair
        this.first_name = first_name
        this.last_name = last_name
        this.anyo_nacimiento = anyo_nacimiento
        this.aficion = aficion
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
            "\nAño de nacimiento:", this.anyo_nacimiento,
            "\nAficiones:", this.aficion
        )
    }
    mostrarAficiones(){
        console.log(this.aficion)
    }
    getAge(){
        return this.age
    }
    setAge(newAge){
        this.age = newAge
    }
    getHeight(){
        return this.heigth
    }
    setHeight(newHeigh){
        this.heigth = newHeigh
    }
    getWeight(){
        return this.weight
    }
    setWeight(newWeight){
        this.weight = newWeight
    }
    getColorEyes(){
        return this.color_eyes
    }
    setColorEyes(newColorEyes){
        this.color_eyes = newColorEyes
    }
    getColorHair(){
        return this.color_hair
    }
    setColorHair(NewHairColor){
        this.color_hair = NewHairColor
    }
    getFirstName(){
        return this.first_name
    }
    setFirstName(newFirstName){
        this.first_name = newFirstName
    }
    getLastName(){
        return this.last_name
    }
    setLastName(newLastName){
        this.last_name = newLastName
    }
    getAnyoNacimient(){
        return this.anyo_nacimiento
    }
    setAnyoNacimiento(newAnyoNacimiento){
        this.anyo_nacimiento = newAnyoNacimiento
    }
    getAficion(){
        return this.aficion
    }
    setAficion(newAficion){
        this.aficion = newAficion
    }
}


class Agenda{
    constructor(personas){
        this.personas = personas
    }
    printPersonas(){
        for (let i = 0; i < this.personas.length; i++){
            console.log("Persona #" + i +"\n")
            this.personas[i].mostrarTodos()
            console.log("\n\n")
        }
    }
}



let p1 = new Persona(18, 1.7, 70, "dark", "brown", "Jiaen", "Pan", 1994, ["Movies","Music","Videogames"])

let p2 = new Persona(26, 1.8, 60, "blue", "purple", "Someone", "Fictional", 2010, ["wrist watches","movies"])



let agendaTel = new Agenda([p1,p2])

agendaTel.printPersonas()