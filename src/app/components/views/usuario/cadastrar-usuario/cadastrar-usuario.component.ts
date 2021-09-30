import { UsuarioService } from './../../../../services/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {
  nome!: string;
  email!: string;

  constructor(private router: Router, private service: UsuarioService) { }

  ngOnInit(): void {}

  cadastrar(): void {
    let usuario: Usuario = {
        nome: this.nome,
        email: this.email,
    };
    this.service.create(usuario).subscribe((usuario) => {
        console.log(usuario);
        this.router.navigate(["usuario/cadastrar"]);
    });
  }
}
