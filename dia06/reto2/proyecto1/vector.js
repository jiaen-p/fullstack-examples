function crear_vector(n, m){
    let vect = []
    for( i = 0; i < n; i++){
        vect.push(Math.floor(Math.random()*(m + 1)))
    }
    return vect
}

function suma_vector(v,u){
    let vect = []
    let vectlength = v.length === u.length
    if (vectlength) {
        for ( i = 0; i < v.length; i++ ){
            vect.push( v[i] + u[i] )
        }
    } else {
        vect = "No se pueden sumar"
    }
    return vect
}

function producto_num_vect(n, v){
    let res = []
    for (i = 0; i < v.length; i++){
        res.push(n * v[i])
    }
    return res
}

function resta_vector(u, v){
    let res = []
    let vectlength = v.length === u.length
    if (vectlength) {
        for ( i = 0; i < u.length; i++) {
            res.push( u[i] - v[i] )
        }
    } else {
        res = "No se pueden restar"
    }
    return res
}

function producto_vector(u, v){
    let res = []
    if (u.length === v.length){
          res = [
              u[1]*v[2] - u[2]*v[1],
              u[2]*v[0] - u[0]*v[2],
              u[0]*v[1] - u[1]*v[0]
          ]
    } else {
        res = "vectores de distintas dimensiones"
    }
    return res
}
module.exports = { crear_vector, suma_vector, producto_num_vect, resta_vector, producto_vector }