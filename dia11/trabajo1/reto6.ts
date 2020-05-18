export function esPar(vector:number[]): boolean{
    let es:boolean = false
    let i:number = 0
    while(!es && i < vector.length){
        es = vector[i]%2===0
        i++
    }
    return es
}
