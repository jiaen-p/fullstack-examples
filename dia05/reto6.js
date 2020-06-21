let libros = ["Ready player one", "El nombre del viento", "El temor de un hombre sabio", "Cien años de soledad", "Origen"]
let num_letras = []
for(i = 0; i < libros.length; i++){
    num_letras.push(libros[i].length)
}

for(i = 0; i < libros.length; i++){
    if(libros[i].length === Math.max(...num_letras)){
        libros[i] = "<strong>" + libros[i] + "</strong>"
    }
    document.write(libros[i] + ' [' + num_letras[i] + ']<br>')
}