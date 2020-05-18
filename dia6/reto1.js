function calculadora(op, num1, num2){
    let result = 0;
    switch (op) {
        case "sum":
            result = num1 + num2
            break;
        case "subs":
            result = num1 - num2
            break;
        case "mult":
            result = num1 * num2
            break;
        case "div":{
            result = num1 / num2
            break;
        }
        default:
            result = "invalid operation"
    }
    return result
}

console.log(calculadora("exp",12,123))
console.log(calculadora("sum", 1,2 ))
console.log(calculadora("subs", 2,2))
console.log(calculadora("mult", 3, 6))
console.log(calculadora("div",1, 0))