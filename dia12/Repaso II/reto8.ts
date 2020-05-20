export function numCaracterArr(arr :string[]): number{
    let num:number = 0
    arr.forEach(char => {
        num += char.length
    })
    return num
}
