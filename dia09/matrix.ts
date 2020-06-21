import { Vector } from './vector'

export class Matrix{
    private elements: Vector[]
    
    constructor( n: number, m: number, k: number){
        let v: Vector[] = []
        for (let i = 0; i < n ; i++){
            v.push( new Vector(m, k))
        }
        this.elements = v
    }
    public print() {
        console.table(this.elements)
    }
    public add(m1: Matrix):Matrix{
        let res: Matrix = new Matrix(0,0,0)
        let arr: number[][] = []
        let m2: Vector[] = m1.getMatrix()
        for(let i = 0; i < this.elements.length; i++){
            arr.push(this.elements[i].add(m2[i]).getVector())
        }
        res.setMatrix(arr)
        return res
    }
    public multNumber(n: number): Matrix{
        let res: Matrix = new Matrix(0,0,0)
        let arr: number[][] = []
        for (let i = 0; i < this.elements.length; i++){
            arr.push(this.elements[i].multNumber(n).getVector())
        }
        res.setMatrix(arr)
        return res
    }

    public multSpecial(n: number):Matrix{
        let res: Matrix = new Matrix(0,0,0)
        let arr: number[][] = []
        for (let i = 0; i < this.elements.length; i++){
            let m: number[] = this.elements[i].getVector()
            let v: number[] = []
            m.forEach( el => {
                if( el%2 === 0){
                    v.push(el * n)
                } else {
                    v.push(el * ( n - 1 ))
                }
            })
            arr.push(v)
        }
        res.setMatrix(arr)
        return res
    }
    private getMatrix(): Vector[]{
        return this.elements
    }
    private setMatrix(matrix: number[][]){
        let res: Vector[] = []
        for(let i = 0; i < matrix.length; i++){
            let v: Vector = new Vector(0,0)
            v.setVector(matrix[i])
            res.push(v)
        }
        this.elements = res
    }
}
