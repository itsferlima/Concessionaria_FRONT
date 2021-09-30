import { Carro } from './../models/carro';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  private baseUrl = "http://localhost:5000/api/carro"; // retirar S

  constructor(private http: HttpClient) { }

  list(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${this.baseUrl}/list`);
  }
  create(carro: Carro): Observable<Carro>{
    return this.http.post<Carro>(`${this.baseUrl}/create`, carro);
  }
  getById(id: number): Observable<Carro> {
    return this.http.get<Carro>(`${this.baseUrl}/getbyid/${id}`);
  }
  getByBuyId(buyId: number): Observable<Carro> {
    return this.http.get<Carro>(`${this.baseUrl}/getbybuyid/${buyId}`);
  }
  update(carro: Carro): Observable<Carro>{
    return this.http.put<Carro>(`${this.baseUrl}/update`, carro);
  }
  delete(id: number): Observable<Carro>{
    return this.http.delete<Carro>(`${this.baseUrl}/delete/${id}`);
  }
}
