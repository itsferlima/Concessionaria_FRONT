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

  delete (id: number): void{
    console.log(this.delete);
    this.service.delete(id).subscribe((Carro) => {
      console.log(id);
      this.snack.open("Deletado", "",{
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate(["carro/deletar"]);
      this.ngOnInit
    })
  }

}
