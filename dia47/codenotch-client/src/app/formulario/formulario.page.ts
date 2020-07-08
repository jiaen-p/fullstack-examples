import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiscoService } from '../shared/disco.service';
import { Disco } from '../models/disco';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  public formulario: FormGroup
  constructor(private formBuilder: FormBuilder, private discos: DiscoService) { 
    this.buildForm()
  }

  ngOnInit() {
  }

  add(){
    let d = new Disco()
    d = this.formulario.value
    this.discos.añadirDisco(d).subscribe(data => {})
  }

  private buildForm(){
    this.formulario = this.formBuilder.group({
      titulo:[, Validators.required],
      interprete:[, Validators.required],
      anyoPublicacion: [, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      id: [0]
    })
  }
}
