function a() {
    console.log("hola desde a");
}
function b() {
    console.log("hola desde b");
}
function main(f) {
    console.log("hola desde main");
    f();
}
main(a);
main(b);
// main(main) //es un bucle infinito
