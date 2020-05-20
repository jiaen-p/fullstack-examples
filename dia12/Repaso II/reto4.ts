export function reverse(arr){
    let res: number[] = []
    for(let i = arr.length - 1; i >= 0; i--){
        res.push(arr[i])
    }
    return res
}

console.log(reverse([5,4,3,2,1]))