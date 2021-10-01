import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-deletar-usuario',
  templateUrl: './deletar-usuario.component.html',
  styleUrls: ['./deletar-usuario.component.css']
})
export class DeletarUsuarioComponent implements OnInit {
  id!: number;
  
  constructor(private router: Router, private service: UsuarioService) { }

  ngOnInit(): void {}

  delete(id: any ) {
    this.service.delete(id).subscribe((id) => {});
    this.router.navigate([""]);
  }

}
