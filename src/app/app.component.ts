import { CarroService } from "./services/carro.service";
import { Component, OnInit } from "@angular/core";
import { Carro } from "./models/carro";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: [],
})
export class AppComponent implements OnInit {
    carros: Carro[] = [];

    constructor(private service: CarroService) {}

    ngOnInit(): void {
        this.service.list().subscribe((carros) => {
            this.carros = carros;
            console.log(carros);
        });
    }
}