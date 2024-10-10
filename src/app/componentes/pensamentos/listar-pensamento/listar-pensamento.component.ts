import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  listaFavoritos: Pensamento[] = [];
  filtro: string = '';
  haMaisPensamentos: boolean = true;
  favorito: boolean = false;
  page: number = 1;


  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service
      .listar(this.page, this.filtro, this.favorito)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  carregarMaisPensamentos() {
    this.service
      .listar(++this.page, this.filtro, this.favorito)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos);
        if (!listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      });
  }

  searchMind() {
    this.haMaisPensamentos = true;
    this.page = 1;
    this.service
      .listar(this.page, this.filtro, this.favorito)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  listarFavoritos() {
    this.haMaisPensamentos = true;
    this.page = 1;
    this.service
      .listar(this.page, this.filtro, this.favorito)
      .subscribe((listaPensamentosFavoritos) => {
        this.listaPensamentos = listaPensamentosFavoritos;
        this.listaFavoritos = listaPensamentosFavoritos;
      });
  }
}
