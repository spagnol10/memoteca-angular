import { Component, OnInit } from '@angular/core';
import type { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: Pensamento[] = [
    {
      conteudo: 'teta',
      autoria: 'Angualr',
      modelo: 'modelo3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
