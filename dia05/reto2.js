let producto = {
    "precio": 3000,
    "nacional": false
}
let importe_bruto = 0;
let tax = 1.16
if (producto.precio < 2000){
    tax = 1.10
}
if(!producto.nacional){
    producto.precio = producto.precio / 1.1
}
importe_bruto = producto.precio / tax;
console.log(Math.round(importe_bruto * 100) / 100)