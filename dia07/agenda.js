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

module.exports = Agenda