import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'temperaturaConverter'
})
export class TemperaturaConverterPipe implements PipeTransform {

  transform(input:{valor:number, unidad:string}, unidadFinal: string): string {
    let res = ''
    if (input.unidad === unidadFinal){
      res = `${input.valor} º${unidadFinal}`
    } else if(input.unidad === 'C'){
      res = `${input.valor * (9/5) + 32} º${unidadFinal}`
    } else {
      res = `${(input.valor - 32) * (5/9)} º${unidadFinal}`
    }
    return res;
  }

}
