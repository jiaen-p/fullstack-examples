import { Component, OnInit } from '@angular/core';
import { DiscoService } from '../../shared/disco.service'
import { Disco } from 'src/app/models/disco';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario-disco',
  templateUrl: './formulario-disco.component.html',
  styleUrls: ['./formulario-disco.component.css']
})
export class FormularioDiscoComponent implements OnInit {
  public d:Disco = new Disco()
  public myForm: FormGroup
  constructor(private discos:DiscoService, private formBuidler: FormBuilder) {  
    this.buildForm()
  }

  ngOnInit(): void {
  }

  add(){
    this.d = this.myForm.value
    this.discos.añadirDisco(this.d)
    .subscribe((data) => {
      console.log(data)
    })
  }

  private buildForm(){
    this.myForm = this.formBuidler.group({
      titulo:[, Validators.required],
      interprete: [,Validators.required],
      anyoPublicacion: [,[Validators.required, Validators.minLength(10)]],
      id: [0]
    })
  }
}
