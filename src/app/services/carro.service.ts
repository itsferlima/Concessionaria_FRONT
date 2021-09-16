import { Carro } from './../models/carro';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  private baseUrl = "http://localhost:5000/api/carro";

  constructor(private http: HttpClient) { }

  list(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${this.baseUrl}/list`);
  }
}
