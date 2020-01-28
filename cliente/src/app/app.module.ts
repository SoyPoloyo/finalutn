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
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { MisionesComponent } from './componentes/misiones/misiones.component';

// servicios
import {GamesService} from './servicios/games.service';
import { UsuariosService } from './servicios/usuarios.service';
import {PersonajesService} from './servicios/personajes.service';
import { PersonajeFormComponent } from './componentes/personaje-form/personaje-form.component';
import { MisionFormComponent } from './componentes/mision-form/mision-form.component';




@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    GameFormComponent,
    GameListaComponent,
    RegistroComponent,
    InicioComponent,
    UsuariosComponent,
    PersonajesComponent,
    MisionesComponent,
    PersonajeFormComponent,
    MisionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService,
    UsuariosService,
    PersonajesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
