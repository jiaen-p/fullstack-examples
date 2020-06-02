function a(): void{
    console.log("hola desde a")
}

function b():void{
    console.log("hola desde b")
}

function main(f):void{
    console.log("hola desde main")
    f();
}

main(a)
main(b)
// main(main) //es un bucle infinito