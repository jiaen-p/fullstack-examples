import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-vista-listado-tabla',
  templateUrl: './vista-listado-tabla.component.html',
  styleUrls: ['./vista-listado-tabla.component.css']
})
export class VistaListadoTablaComponent implements OnInit {
  @Input() ciudades: Ciudad[]
  @Output() detalles = new EventEmitter<number>();
  constructor() { }
  ngOnInit(): void {
  }
  mostrar(index:number){
    this.detalles.emit(index)
  }
}
