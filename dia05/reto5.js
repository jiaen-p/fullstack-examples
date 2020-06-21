let matrixA = []
let matrixB = []

for (i = 0; i < 10; i++){
    let v = []
    let x = []
    for(j = 0; j < 10; j++){
        v.push( Math.floor( Math.random() * 51) )
        x.push( Math.floor( Math.random() * 51) )
    }
    matrixA.push(v)
    matrixB.push(x)
}


let matrixSum = []

for(i = 0; i < 10; i++){
    let v = []
    for(j = 0; j < 10; j++){
        v.push( matrixA[i][j] + matrixB[i][j] )
    }
    matrixSum.push(v)
}
// console.log(matrixSum[0][0])

let multiplo = 3
let multiplicacion = []
// matrixSum.map(vect => {
//     multiplicacion.push(vect.map(x => x * multiplo))
// })
for(i = 0; i < 10; i++){
    let v = []
    for(j = 0; j < 10; j++){
        v.push(matrixSum[i][j] * multiplo)
    }
    multiplicacion.push(v)
}
// console.log(multiplicacion[0][0])


// multiplicacion entre matrices
multiplicacion = []

for (i = 0; i < 10; i++){
    let vect = []
    for(j = 0; j < 10; j++){
        let suma = 0;
        for(k = 0; k < 10; k++){
            suma += matrixA[i][j] * matrixB[j][k]
        }
        vect.push(suma)
    }
    multiplicacion.push(vect)
}
console.table(multiplicacion)