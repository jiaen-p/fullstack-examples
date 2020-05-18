class Vector {
    constructor(n_dim, m_max_random){
        let v = []
        for (let i = 0; i < n_dim; i++){
            let el = Math.floor(Math.random()*(m_max_random + 1))
            v.push(el)
        }
        this.vector = v
    }
    suma_vector(vector_b){
        let v = []
        let equalLenght = vector_b.vector.length === this.vector.length

        if (equalLenght) {
            for (let i = 0; i < this.vector.length; i++){
                v.push( this.vector[i] + vector_b.vector[i])
            }
        } else {
            v = "No tienen la misma dimension"
        }
        return v
    }
    producto_num_vect(n){
        let v = []
        for (let i = 0; i < this.vector.length; i++){
            v.push( n * this.vector[i])
        }
        return v
    }
    resta_vector(vector){
        let v = []
        let equalLenght = vector.vector.length === this.vector.length
        if (equalLenght){
            for (let i = 0; i < vector.vector.length; i++){
                v.push(this.vector[i] - vector[i])
            }
        } else {
            v = "No tienen la misma dimension"
        }
        return v
    }
    producto_vector(vector){
        let v = []
        let equalLenght = vector.vector.length === this.vector.length
        if (equalLenght){
            v = [
                this.vector[1] * vector.vector[2] - this.vector[2] * vector.vector[1],
                this.vector[2] * vector.vector[0] - this.vector[0] * vector.vector[2],
                this.vector[0] * vector.vector[1] - this.vector[1] * vector.vector[0]
            ]
        } else {
            v = "No tienen la misma dimension"
        }
        return v
    }
}

module.exports = Vector