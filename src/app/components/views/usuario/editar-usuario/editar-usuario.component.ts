import { UsuarioService } from './../../../../services/usuario.service';
import { Usuario } from './../../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  id!: number;
  nome!: string;
  email!: string;

  constructor(private router: Router, private route: ActivatedRoute, private service: UsuarioService, private snack: MatSnackBar) { }

  ngOnInit(): void {}

  update(): void {
    let usuario : Usuario = {
        id!: this.id,
        nome!: this.nome,
        email!: this.email,
    };
    this.service.update(usuario).subscribe((usuario) => {
      console.log(usuario);
      this.router.navigate(["usuario/editar"]);
    });
  }
}
