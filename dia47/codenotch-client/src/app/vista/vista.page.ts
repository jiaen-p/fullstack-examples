import { Component, OnInit } from '@angular/core';
import { DiscoService } from '../shared/disco.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.page.html',
  styleUrls: ['./vista.page.scss'],
})
export class VistaPage implements OnInit {
  public datos = null
  public id = null
  constructor(private discos:DiscoService) { }

  ngOnInit() {
  }

  mostrar(){
    if(this.id){
      this.discos.obtenerDisco(this.id)
      .subscribe(data => {
        this.datos = data
      })
    } else {
      this.discos.obtenerDiscos()
      .subscribe( data => {
        this.datos = data
      })
    }
    this.id = null
  }
}
