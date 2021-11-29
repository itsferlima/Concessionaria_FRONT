import { ItensService } from '../../../services/itens.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroService } from 'src/app/services/carro.service';
import { Carro } from 'src/app/models/carro';
import { Itens } from 'src/app/models/itens';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carros: Carro[]=[];
  itens: Itens[]=[];

  constructor(private CarroService: CarroService, private ItensService: ItensService, private router: Router) { }

  ngOnInit(): void {
    this.CarroService.list().subscribe((carros) => {
      this.carros = carros;
    });
  }

  adicionar(carro: Carro): void{
    let itens: Itens = {
      carro: carro,
      valor: carro.valor,
      carroId: carro.id!,
      carrinhoId: localStorage.getItem("carrinhoId")! || "",
    };

    this.ItensService.create(itens).subscribe((itens) => {
      localStorage.setItem("carrinhoId", itens.carrinhoId);
      this.router.navigate(["home/carrinho"]);
  });
}
}
