function square(x) {
    return Math.pow(x, 2);
}
function randNum(n) {
    return Math.floor(Math.random() * (n + 1));
}
function compose(a, b) {
    return function (x) {
        return a(b(x));
    };
}
console.log(compose(square, randNum)(8));
