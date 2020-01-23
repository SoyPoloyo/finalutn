import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GameListaComponent} from './componentes/game-lista/game-lista.component';
import {GameFormComponent} from './componentes/game-form/game-form.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { MisionesComponent } from './componentes/misiones/misiones.component';



const routes: Routes = [

  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  { 
    path: 'games',
    component:GameListaComponent
  },
  {
    path: 'games/agregar',
    component:GameFormComponent
  },
  {
    path:'games/editar/:id',
    component: GameFormComponent
  },
  {
    path: 'inicio',
    component:InicioComponent
    
  },
  {
    path: 'games/misiones',
    component:MisionesComponent
    
  }, 
  {
    path: 'games/personajes',
    component:PersonajesComponent
    
  },
  {
    path: 'inicio/crearUsuario',
    component:RegistroComponent
  },
  {
    path: 'inicio/usuarios/:id',
    component:UsuariosComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
