const vect = require('./vector')

function crear_matriz( n, m, k){
    let matriz = []
    for (let i = 0; i < n; i++){
        matriz.push( vect.crear_vector(m, k))
    }
    return matriz
}

function suma_matriz(A,B){
    let suma = []
    if ( mismo_num_elementos(A,B)) {
        for(let i = 0; i < A.length ; i++) {
            suma.push( vect.suma_vector( A[i], B[i] ))
        }
    } else {
        suma = "No coincide las dimensiones"
    }
    return suma
}

function resta_matriz (A, B) {
    let resta = []
    if ( mismo_num_elementos(A, B) ){
        for (let i = 0; i < A.length; i++){
            resta.push( vect.resta_vector( A[i], B[i] ))
        }
    } else {
        resta = "No coincide las dimensiones"
    }
    return resta
}

function producto_num_matriz(n, A){
    let producto = []
    for (let i = 0; i < A.length; i++){
        producto.push( vect.producto_num_vect(n, A[i] ))
    }
    return producto
}

function producto_matriz(A, B){
    let producto = []
    if ( mismo_num_elementos (A, B) ){
        for (i = 0; i < A.length; i++){
            let vector = []
            for(j = 0; j < A[i].length; j++){
                let suma = 0;
                for(k = 0; k < A[i].length; k++){
                    suma += A[i][k] * B[k][j]
                }
                vector.push(suma)
            }
            producto.push(vector)
        }
    } else {
        producto = "no coincide las dimensiones"
    }
    return producto
}

module.exports = { crear_matriz, suma_matriz, resta_matriz, producto_num_matriz, producto_matriz }

// ----------------------------------------------------------------------------------------------
function mismo_num_elementos(A,B){
    let num_el_a = 0
    let num_el_b = 0
    for (let i = 0; i < A.length; i++){
        num_el_a += A[i].length - 1
    }
    for (let i = 0; i < B.length; i++){
        num_el_b += B[i].length - 1
    }
    return num_el_a === num_el_b
}
