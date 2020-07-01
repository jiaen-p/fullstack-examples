import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-vista-detalle',
  templateUrl: './vista-detalle.component.html',
  styleUrls: ['./vista-detalle.component.css']
})
export class VistaDetalleComponent implements OnInit {
  @Input() ciudades:Ciudad[]
  @Input() selected:number
  @Input() unidad:string
  @Output() cambiar = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  cambiarUnidad(){
    this.cambiar.emit()
  }
}
