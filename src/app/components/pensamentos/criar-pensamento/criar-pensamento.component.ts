import { Component, OnInit } from '@angular/core';

import type { Pensamento } from '../pensamento';

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

  constructor() {}

  ngOnInit(): void {}

  createNewMind() {
    alert('new Mind');
  }

  cancel() {
    alert('Cancelar Mind');
  }
}
