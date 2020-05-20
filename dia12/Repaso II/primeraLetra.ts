function empiezanIgual(nombres: string[]):boolean {
    const valor: string = 'M';
    let i:number = 0;
    var resultado:boolean = true;
    while (i < nombres.length && resultado){
        var letra: string = nombres[i].split('')[0];
        if (valor === letra){
            return true;
        }
        else{
            resultado = false;
        }
        i++;
    }
    return resultado;
}