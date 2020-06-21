reducer = (v = [0]) => {
    let result = 0;
    if (Array.isArray(v)){
        for( i = 0; i < v.length; i++){
            result += v[i]
        }
    } else if (!Array.isArray(v)){
        result = "No es un array"
    }
    return result
}
let v = [1,2,3,4]
console.log("sin parametros",reducer())
console.log("con paramentros", reducer(v))