import { Component, OnInit } from '@angular/core';
import { CarroService } from 'src/app/services/carro.service';
import { Carro } from 'src/app/models/carro';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-editar-carro',
  templateUrl: './editar-carro.component.html',
  styleUrls: ['./editar-carro.component.css']
})
export class EditarCarroComponent implements OnInit {
  id!:number;
  marca!: string;
  valor!: number;
  userId!: number;

  constructor(private router: Router, private route: ActivatedRoute, private service: CarroService, private snack: MatSnackBar) { }

  ngOnInit(): void {}

  update(): void {
    let carro: Carro = {
        id!: this.id,
        marca: this.marca,
        valor: this.valor,
        userId: this.userId,
    };
    
    this.service.update(carro).subscribe((carro) => {
      // this.snack.open("Carro editado", "Carro",{
      //   duration: 3000,
      //   horizontalPosition: "left",
      //   verticalPosition: "top",
      //   })
        console.log(carro);
        this.router.navigate(["carro/editar"]);
    });
  }
}
