import { Usuario } from 'src/app/models/usuario';
import { CarroService } from './../../../../services/carro.service';
import { UsuarioService } from './../../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Carro } from 'src/app/models/carro';
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-cadastrar-carro',
  templateUrl: './cadastrar-carro.component.html',
  styleUrls: ['./cadastrar-carro.component.css']
})
export class CadastrarCarroComponent implements OnInit {
  id!: number;
  marca!: string;
  valor!: number;
  usuarios!: Usuario[];
  userId!: number;

  constructor(private router: Router, private route: ActivatedRoute, private service: CarroService, private usuarioService: UsuarioService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.usuarioService.list().subscribe((usuarios) => {
        this.usuarios = usuarios;
    });
}
  // ngOnInit(): void {
  //   this.route.params.subscribe((params) => {
  //     this.id = params.id;
  //     if (this.id != undefined) {
  //         this.service.getById(this.id).subscribe((carro) => {
  //             this.marca = carro.marca;
  //             this.valor = carro.valor;
  //             this.usuario = carro.usuario;
  //             this.buyId = carro.buyId;
              
  //         });
  //     }
  // });
  // }

  cadastrar(): void {
    let carro: Carro = {
      marca: this.marca,
      valor: this.valor,
      userId: this.userId,
    };

    this.service.create(carro).subscribe((carro ) =>{
      this.snack.open("Carro cadastrado", "Carro",{
      duration: 3000,
      horizontalPosition: "left",
      verticalPosition: "top",
      })

      console.log(carro);
      this.router.navigate(["carro/listar"]);
    });
  }

}
