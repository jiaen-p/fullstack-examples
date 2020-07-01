import { Component, OnInit } from '@angular/core';
import { Autor } from '../../models/autor'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  miAutor: Autor
  constructor() { 
    this.miAutor = {
      nombre: "Jared",
      apellidos: "Leto",
      biografia: "Profesional Jesus",
      url: "https://www.gstatic.com/tv/thumb/persons/74092/74092_v9_bb.jpg"
    }
  }

  ngOnInit(): void {
  }
  changeName(name:HTMLInputElement){
    console.log(this.miAutor.nombre)
    this.miAutor.nombre = name.value
    console.log(this.miAutor.nombre)
  }
  showName():void{
    console.log(this.miAutor.nombre)
  }
}
