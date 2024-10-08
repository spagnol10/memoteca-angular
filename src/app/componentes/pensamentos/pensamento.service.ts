import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable, type filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(page: number, filter: string): Observable<Pensamento[]> {
    const limit = 6;
    // GET /posts?_page=1&_per_page=25

    let params = new HttpParams()
      .set("_page", page)
      .set("_limit", limit)

    if (filter != null) {
      params = params.set("q", filter)
    }

    // return this.http.get<Pensamento[]>(`${this.API}?_page=${page}&_limit=${limit}`)
    return this.http.get<Pensamento[]>(this.API, { params })
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    console.log(pensamento);

    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)

  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }

}
