import { Component, OnInit } from '@angular/core';
import { DiscoService } from '../../shared/disco.service'
import { Disco } from 'src/app/models/disco';
@Component({
  selector: 'app-formulario-disco',
  templateUrl: './formulario-disco.component.html',
  styleUrls: ['./formulario-disco.component.css']
})
export class FormularioDiscoComponent implements OnInit {
  public d:Disco
  constructor(private discos:DiscoService) { }

  ngOnInit(): void {
  }

  add(titulo:string, interprete:string, fecha:number, id?:number){
    this.discos.añadirDisco(new Disco(id = 0, titulo, interprete, fecha))
    .subscribe((data) => {
      console.log(data)
    })
  }

  modificar(titulo:string, interprete:string, fecha:number, id:number){
    this.discos.actualizarDisco(new Disco(id, titulo, interprete, fecha))
  .subscribe((data) => {
    console.log(data)
  })}

  borrar(id:number){
    this.discos.borrarDisco(id)
    .subscribe( data => console.log(data))
  }
}
