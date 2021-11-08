import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-deletar-usuario',
  templateUrl: './deletar-usuario.component.html',
  styleUrls: ['./deletar-usuario.component.css']
})
export class DeletarUsuarioComponent implements OnInit {
  nome!: string;
  
  constructor(private router: Router, private service: UsuarioService) { }

  ngOnInit(): void {}

  delete(nome: string ): void {
    console.log(this.delete);
    this.service.delete(nome).subscribe((nome) => {});
    this.router.navigate(["usuario/listar"]);
  }

}
