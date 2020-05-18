let libros = ["Ready player one", "El nombre del viento", "El temor de un hombre sabio", "Cien años de soledad", "Origen"]
let i_largest = [];


// libros.forEach( (libro,index,libros) => {
//     libros[index] = [libros[index], libro.length]
//     i_largest.push(libro.length)
// })

for (i = 0; i < libros.length; i++){
    libros[i] = [libros[i], libros[i].length]
    i_largest.push( libros[i][0].length)
}

let longest_title_index = i_largest.indexOf( Math.max(...i_largest) )
libros[longest_title_index] = ['<strong>' + libros[longest_title_index][0] + '</strong>', libros[longest_title_index][1]]

let print_text = ''

// libros.forEach(libro => {
//     print_text += libro[0] + ' [' + libro[1] + ']<br>'
// })

for (i=0; i<libros.length; i++){
    print_text += libros[i][0] + ' [' + libros[i][1] + ']<br>'
}

document.write(print_text)
// console.log(print_text)