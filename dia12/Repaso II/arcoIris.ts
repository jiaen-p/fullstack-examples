function arcoIris(colores: string[]): string {
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