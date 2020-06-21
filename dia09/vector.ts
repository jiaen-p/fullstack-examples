export class Vector{
    private elemets: number[]
    constructor(n: number, k: number){
        let v: number[] = []
        for( let i = 0; i < n; i++){
            v.push(Math.floor( Math.random() * (k + 1)))
        }
        this.elemets = v
    }
    public print(){
        console.log(this.elemets)
    }
    public add(v1: Vector):Vector{
        let v2: number[] = v1.getVector()
        let v: number[] = []
        let res: Vector = new Vector(0,0)
        for (let i = 0; i < this.elemets.length; i++){
            v.push( this.elemets[i] + v2[i])
        }
        res.setVector(v)
        return res
    }
    public subs(v1: Vector):Vector{
        let v2: number[] = v1.getVector()
        let v: number[] = []
        let res: Vector = new Vector(0,0)
        for( let i = 0; i < this.elemets.length; i++){
            v.push( this.elemets[i] - v2[i])
        }
        res.setVector(v)
        return res
    }
    public mult(v1: Vector): Vector{
        let v2: number[] = v1.getVector()
        let res: Vector = new Vector(0,0)        
        res.setVector([
            this.elemets[1] * v2[2] - this.elemets[2] * v2[1],
            this.elemets[2] * v2[0] - this.elemets[0] * v2[2],
            this.elemets[0] * v2[1] - this.elemets[1] * v2[0]
        ])
        return res
    }
    public multNumber(n: number): Vector{
        let v: number[] = []
        let res: Vector = new Vector(0,0)
        this.elemets.forEach(element =>{
            v.push( n * element)
        })
        res.setVector(v)
        return res
    }
    public getVector(): number[]{
        return this.elemets
    }
    public setVector(vector: number[]){
        this.elemets = vector
    }
}

