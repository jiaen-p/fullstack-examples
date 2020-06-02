function square (x:number):number{
    return Math.pow(x,2)
}

function randNum(n:number):number{
    return Math.floor(Math.random()*(n + 1))
}

function compose(a,b){
    return function (x:number):number{
        return a(b(x))
    }
}
console.log(compose(square,randNum)(8))