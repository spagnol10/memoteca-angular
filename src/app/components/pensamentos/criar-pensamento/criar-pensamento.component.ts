import { Component, OnInit } from '@angular/core';

import { Pensamento } from '../pensamento';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  };

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulario reativo'],
      autoria: ['Angular 1'],
      modleo: ['modelo1']
    }
    )
  }

  createNewMind() {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancel() {
    this.router.navigate(['/listarPensamento'])
  }
}
