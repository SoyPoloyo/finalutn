import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { GameFormComponent } from './componentes/game-form/game-form.component';
import { GameListaComponent } from './componentes/game-lista/game-lista.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

// servicios
import {GamesService} from './servicios/games.service';
import { UsuariosService } from './servicios/usuarios.service';



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    GameFormComponent,
    GameListaComponent,
    RegistroComponent,
    InicioComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService,
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
