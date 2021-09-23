import { CadastrarCarroComponent } from './components/views/carro/cadastrar-carro/cadastrar-carro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCarroComponent } from './components/views/carro/listar-carro/listar-carro.component';

const routes: Routes = [
  {
    path: "",
    component: ListarCarroComponent,
  },
  {
    path:"carro/listar",
    component:ListarCarroComponent,
  },
  {
    path:"carro/cadastrar",
    component: CadastrarCarroComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }