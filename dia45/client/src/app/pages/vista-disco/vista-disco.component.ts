import { Component, OnInit } from '@angular/core';
import { DiscoService } from 'src/app/shared/disco.service';

@Component({
  selector: 'app-vista-disco',
  templateUrl: './vista-disco.component.html',
  styleUrls: ['./vista-disco.component.css']
})
export class VistaDiscoComponent implements OnInit {
  public datos = null
  constructor(public discos:DiscoService) { }

  ngOnInit(): void {
  }
  mostrar(id?:string){
    if(id){
      this.discos.obtenerDisco(id).subscribe(data => this.datos = data)
      console.log(id)
    } else {
      this.discos.obtenerDiscos().subscribe(data => this.datos = data )
    }
  }
}
