import { CarroService } from 'src/app/services/carro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-deletar-carro',
  templateUrl: './deletar-carro.component.html',
  styleUrls: ['./deletar-carro.component.css']
})
export class DeletarCarroComponent implements OnInit {
  id!: number;

  constructor(private router: Router, private service: CarroService, private snack: MatSnackBar) {}

  ngOnInit(): void {}

  delete(id: any ) {
    this.service.delete(id).subscribe((id) => {});
    this.router.navigate([""]);
  }
}
