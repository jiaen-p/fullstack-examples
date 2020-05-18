const Vector = require('./vector')
const mensaje_error = "No coincide las dimensiones"

class Matrix{
    constructor(dim_m, dim_n, max_random_num){
        let matrix = []
        for (let i = 0; i < dim_m; i++){
            let v = new Vector(dim_n, max_random_num)
            matrix.push( v.vector )
        }
        this.matrix = matrix
    }
    suma_matriz(mat_B){
        mat_B = mat_B.matrix
        let suma = []
        if ( this.mismo_num_elementos(mat_B) ){
            for(let i = 0; i < this.matrix.length; i++){
                let v = []
                for(let j = 0; j < this.matrix[i].length; j++){
                    v.push( this.matrix[i][j] + mat_B[i][j])
                }
                suma.push(v)
            }
        } else {
            suma = mensaje_error
        }
        return suma
    }
    resta_matriz(mat_B){
        mat_B = mat_B.matrix
        let resta = []
        if ( this.mismo_num_elementos(mat_B) ){
            for(let i = 0; i < this.matrix.length; i++){
                let v = []
                for(let j = 0; j < this.matrix[i].length; j++){
                    v.push( this.matrix[i][j] - mat_B[i][j])
                }
                resta.push(v)
            }
        } else {
            resta = mensaje_error
        }
        return resta
    }
    producto_num_matriz(num){
        for (let i = 0; i < this.matrix.length; i++){
            for (let j = 0 ; j < this.matrix[i].length; j++){
                this.matrix[i][j] *= num
            }
        }
        return this.matrix
    }
    producto_matriz(mat_B){
        mat_B = mat_B.matrix
        let producto = []
        if ( this.mismo_num_elementos (mat_B) ){
            for (let i = 0; i < this.matrix.length; i++){
                let vector = []
                for(let j = 0; j < this.matrix[i].length; j++){
                    let suma = 0;
                    for(let k = 0; k < this.matrix[i].length; k++){
                        suma += this.matrix[i][k] * mat_B[k][j]
                    }
                    vector.push(suma)
                }
                producto.push(vector)
            }
        } else {
            producto = mensaje_error
        }
        return producto
    }
    incluye(num = 10){
        let esta = false
        let i = 0
        while (i < this.matrix.length && !esta){
            esta = this.matrix[i].includes(num)
            i++
        }
        if (esta){
            console.log("Esta presente el num:", num)
        } else {
            console.log("No esta presente el num:", num)
        }
    }

// -----------------------------------------------------------------------------------------------------
    mismo_num_elementos(mat_B){
        return this.num_elementos(this.matrix) === this.num_elementos(mat_B)
    }
    num_elementos(matrix){
        let num_el_matrix = 0;
        for (let i = 0; i < matrix.length; i++){
            num_el_matrix += matrix[i].length - 1
        }
        return num_el_matrix
    }
    generate_num(){
        return Math.floor( Math.random() * 11)
    }
}


module.exports = Matrix