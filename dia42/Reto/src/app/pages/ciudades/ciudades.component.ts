import { Component, OnInit } from '@angular/core';
import {Ciudad} from '../../models/ciudad'
import { Temperatura } from '../../models/temperatura'
@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {
  ciudades: Ciudad[] = [
    new Ciudad( "Sagres", "Portugal", "SAG",{temperatura:Temperatura.new(32, "C"), precipitaciones: .20, viento: 20}),
    new Ciudad("San Francisco", "EE.UU", "SF",{temperatura:Temperatura.new(28, "C"), precipitaciones: .12, viento: 2}),
    new Ciudad("Berlin", "Alemania", "BER",{temperatura:Temperatura.new(25, "C"), precipitaciones: .10, viento: 5}),
    new Ciudad("Praga", "Rep. Checa", "PRG",{temperatura:Temperatura.new(15, "C"), precipitaciones: .9, viento: 3}),
    new Ciudad("Madrid", "España", "MAD",{temperatura:Temperatura.new(35, "C"), precipitaciones: 0, viento: 10}),
    new Ciudad("Londres", "Reino Unido", "LON",{temperatura:Temperatura.new(20, "C"), precipitaciones: .80, viento: 20}),
    new Ciudad("Tokyo", "Japon", "TOK",{temperatura:Temperatura.new(34, "C"), precipitaciones: .70, viento: 2})
  ]
  selected:number = null
  unidad: string = 'C'
  constructor() {
  

  }

  ngOnInit(): void {
  }

  add(ciudad: Ciudad){
    this.ciudades.push(ciudad)
  }

  mostrar(codigo: number){
    if (this.selected === codigo){
      this.selected = null
    } else {
      this.selected = codigo
    }
  }

  cambiarUnidad(){
    this.unidad === 'C' ? this.unidad = 'F' : this.unidad = 'C'
  }
}
