export function imparesHasta (n:number): number[]{
    let vect: number[] = []
    for (let i = 1; i < n; i += 2){
        vect.push(i)
    }
    return vect
}
export function reverse(arr){
    let res: number[] = []
    for(let i = arr.length - 1; i >= 0; i--){
        res.push(arr[i])
    }
    return res
}
export function numCaracterArr(arr :string[]): number{
    let num:number = 0
    arr.forEach(char => {
        num += char.length
    })
    return num
}

console.log(imparesHasta(7))