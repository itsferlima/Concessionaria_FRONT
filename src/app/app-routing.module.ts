import { EditarCarroComponent } from './components/views/carro/editar-carro/editar-carro.component';
import { HomeComponent } from './components/views/home/home.component';

import { DeletarCarroComponent } from './components/views/carro/deletar-carro/deletar-carro.component';
import { CadastrarCarroComponent } from './components/views/carro/cadastrar-carro/cadastrar-carro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCarroComponent } from './components/views/carro/listar-carro/listar-carro.component';
import { CadastrarUsuarioComponent } from './components/views/usuario/cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path:"carro/listar",
    component:ListarCarroComponent,
  },
  {
    path:"carro/cadastrar",
    component: CadastrarCarroComponent,
  },
  {
    path:"carro/delete",
    component: DeletarCarroComponent,
  },
  {
    path:"carro/update",
    component: EditarCarroComponent,
  },
  {
    path:"usuario/cadastrar",
    component: CadastrarUsuarioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }