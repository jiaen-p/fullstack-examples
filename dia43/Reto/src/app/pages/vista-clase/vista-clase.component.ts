import { Component, OnInit } from '@angular/core';
import { CiudadesServiceService } from '../../shared/ciudades-service.service'
@Component({
  selector: 'app-vista-clase',
  templateUrl: './vista-clase.component.html',
  styleUrls: ['./vista-clase.component.css']
})
export class VistaClaseComponent implements OnInit {

  constructor(public ciudades: CiudadesServiceService) { }

  ngOnInit(): void {
  }

}
