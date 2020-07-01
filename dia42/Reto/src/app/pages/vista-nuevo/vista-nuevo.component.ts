import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-vista-nuevo',
  templateUrl: './vista-nuevo.component.html',
  styleUrls: ['./vista-nuevo.component.css']
})
export class VistaNuevoComponent implements OnInit {
  @Output() ciudadNuevo = new EventEmitter<Ciudad>()
  constructor() { }

  ngOnInit(): void {
  }
  add(ciudad: string, pais:string, codigo:string){
    this.ciudadNuevo.emit( new Ciudad(ciudad,pais,codigo,{temperatura: null, precipitaciones: null, viento: null}))
  }
}
