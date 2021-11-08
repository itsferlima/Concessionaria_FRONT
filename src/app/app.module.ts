import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastrarCarroComponent } from './components/views/carro/cadastrar-carro/cadastrar-carro.component';
import { ListarCarroComponent } from './components/views/carro/listar-carro/listar-carro.component';
import { DeletarCarroComponent } from './components/views/carro/deletar-carro/deletar-carro.component';
import { CadastrarUsuarioComponent } from './components/views/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { HomeComponent } from './components/template/home/home.component';
import { EditarCarroComponent } from './components/views/carro/editar-carro/editar-carro.component';

//material
import {HeaderComponent} from './components/template/header/header.component';
import {ContentComponent} from './components/template/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { EditarUsuarioComponent } from './components/views/usuario/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './components/views/usuario/listar-usuario/listar-usuario.component';
import { DeletarUsuarioComponent } from './components/views/usuario/deletar-usuario/deletar-usuario.component';



@NgModule({
  declarations: [
    AppComponent,
    CadastrarCarroComponent,
    ListarCarroComponent,
    HeaderComponent,
    ContentComponent,
    DeletarCarroComponent,
    HomeComponent,
    EditarCarroComponent,
    CadastrarUsuarioComponent,
    EditarUsuarioComponent,
    ListarUsuarioComponent,
    DeletarUsuarioComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,  //aqui
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
