import { UsuarioService } from './../../../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  usuarios : Usuario [] = [];

  constructor( private service: UsuarioService) { }

  ngOnInit(): void {
    this.service.list().subscribe((usuarios) =>{
    this.usuarios = usuarios;
    console.log(usuarios);
   });
  }
}
