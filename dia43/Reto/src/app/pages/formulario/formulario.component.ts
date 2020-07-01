import { Component, OnInit } from '@angular/core';
import { CiudadesServiceService } from 'src/app/shared/ciudades-service.service';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public accion: string = null
  public anadido:boolean = false
  public buscado: boolean | string= false
  public encontrado: Ciudad = null
  constructor(public ciudad: CiudadesServiceService) { }

  ngOnInit(): void {
  }

  add(ciudad:string, pais: string, codigo: string):void{
    if(codigo){
      this.anadido = this.ciudad.add(new Ciudad(ciudad, pais, codigo))
      this.anadido ? this.accion = `Se ha añadido correctamente` : this.accion = 'No se ha guardado' 
      setTimeout(() => {
        this.anadido = null
        this.accion = null
      }, 3000);
    }
  }
  edit(ciudad:string, pais: string, codigo: string): void{
    if(codigo){
      this.anadido = this.ciudad.edit(codigo, new Ciudad(ciudad,pais,codigo))
      this.anadido ? this.accion = "Modificado" : this.accion = "Error"
      setTimeout(() => {
        this.anadido = null
        this.accion = null
      }, 3000);
    }
  }
  getOne(codigo:string){
    if(codigo){
      this.buscado = null
      this.encontrado = this.ciudad.getOne(codigo)
      if(!this.encontrado) {
        this.buscado = `No existe ${codigo}`
        setTimeout(() => {
        this.buscado = null
        }, 1000);
      }
    }
  }

  delete(codigo:string){
    this.buscado = null
    this.encontrado = null
    if(this.ciudad.delete(codigo)){
      this.buscado = `Se ha borrado ${codigo}`
    } else {
      this.buscado = `No existe ${codigo}`
    }
    setTimeout(() => {
      this.buscado = null
    }, 1000);
  }
}
