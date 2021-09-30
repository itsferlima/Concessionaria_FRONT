import { Component, OnInit } from '@angular/core';
import { CarroService } from 'src/app/services/carro.service';
import { Carro } from 'src/app/models/carro';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-carro',
  templateUrl: './listar-carro.component.html',
  styleUrls: ['./listar-carro.component.css']
})
export class ListarCarroComponent implements OnInit {
  //carros: Carro [] = [];

  carros!: MatTableDataSource<Carro>

  listColumns: string[] = ['id', 'marca', 'valor', 'id de compra'];

  constructor(private service: CarroService) { }

  ngOnInit(): void {
    this.service.list().subscribe((list) =>{ //list
      this.carros = new MatTableDataSource<Carro>(list)
      
    });
  }
}
