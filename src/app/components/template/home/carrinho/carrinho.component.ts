
import { Itens } from './../../../../models/itens';
import { Component, OnInit } from '@angular/core';
import { ItensService } from 'src/app/services/itens.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itens: Itens[] = [];

    colunasExibidas: String[] = ["marca", "valor", "imagem"];
    valorTotal!: number;
    constructor(private itensService: ItensService) {}

    ngOnInit(): void {
        let carrinhoId = localStorage.getItem("carrinhoId")! || "";
        this.itensService.getByCartId(carrinhoId).subscribe((itens) => {
            this.itens = itens;
            this.valorTotal = this.itens.reduce((total, Itens) => {
                return total;
            }, 0);
        });
    }

}
