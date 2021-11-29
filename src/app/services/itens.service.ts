import { Itens } from "../models/itens";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ItensService {
    private baseUrl = "http://localhost:5000/api/itens";

    constructor(private http: HttpClient) {}

    create(itens: Itens): Observable<Itens> {
        return this.http.post<Itens>(`${this.baseUrl}/create`, itens);
    }

    getByCartId(carrinhoId: string): Observable<Itens[]> {
        return this.http.get<Itens[]>(
            `${this.baseUrl}/getbycartid/${carrinhoId}`
        );
    } 
}