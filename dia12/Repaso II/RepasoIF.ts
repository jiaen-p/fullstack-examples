export function arcoIris(colores: string[]): string {
    let i:number;
    for (i = 0; i < colores.length; i++){
        if (colores[i] === 'rojo' || colores[i] === 'naranja' || colores[i] === 'amarillo' || colores[i] === 'verde' ||
         colores[i] === 'azul' || colores[i] === 'morado' || colores[i] === 'rosa'){
            return colores[i] + ' Esta en el arcoiris';
        } else {
            return colores[i] + ' No esta en el arcoiris'; 
        }
    }
}
export function parImpar(n: number) {
    let res: string = 'Es impar'
    if (n % 2 === 0){
        res = 'Es par';
    } 
    return res
}
export function signoZod(d: number, m: number): string {
    let acuario = (d >= 20 && m == 1) || (d <= 18 && m == 2)
    let piscis = (d >= 19 && m == 2) || (d <= 20 && m == 3)
    let aries = (d >= 21 && m == 3) || (d <= 19 && m == 4)
    let tauro = (d >= 20 && m == 4) || (d <= 20 && m == 5)
    let geminis = (d >= 21 && m == 5) || (d <= 20 && m == 6)
    let cancer = (d >= 21 && m == 6) || (d <= 22 && m == 7)
    let leo = (d >= 23 && m == 7) || (d <= 22 && m == 8)
    let virgo = (d >= 23 && m == 8) || (d <= 22 && m == 9)
    let libra = (d >= 23 && m == 9) || (d <= 22 && m == 10)
    let escorpio = (d >= 23 && m == 10) || (d <= 21 && m == 11)
    let sagitario = (d >= 22 && m == 11) || (d <= 21 && m == 12)
    if (acuario){
        return 'Acuario';
    }
    else if (piscis){
        return 'Piscis';
    }
    else if (aries){
        return 'Aries';
    }
    else if (tauro){
        return 'Tauro';
    }
    else if (geminis){
        return 'Geminis';
    }
    else if (cancer){
        return 'Cancer';
    }
    else if (leo){
        return 'Leo';
    }
    else if (virgo){
        return 'Virgo';
    }
    else if (libra){
        return 'Libra';
    }
    else if (escorpio){
        return 'Escorpio';
    }
    else if (sagitario){
        return 'Sagitario';
    }
    else{
        return 'Capricornio';
    }
}