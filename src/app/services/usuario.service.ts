import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = "http://localhost:5000/api/usuario"; // retirar S

  constructor(private http: HttpClient) {}

  list(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/list`);
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}/create`, usuario);
  }

  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseUrl}/update`, usuario);
  }
    
  delete(usuario: Usuario): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.baseUrl}/update/${usuario.nome}`);
  }
  find(id: Number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/getbyid/${id}`);
  }

}
