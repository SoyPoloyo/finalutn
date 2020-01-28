import { Component, OnInit, HostBinding } from '@angular/core';

import { Personajes } from '../../modelos/personaje';
import { ActivatedRoute, Router } from '@angular/router';

import {PersonajesService} from '../../servicios/personajes.service';


@Component({
  selector: 'app-personaje-form',
  templateUrl: './personaje-form.component.html',
  styleUrls: ['./personaje-form.component.css']
})
export class PersonajeFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  personaje: Personajes = {
    id: 0,
    card_id: localStorage.card_id,
    nombre: '',
    descripcion: '',
    imagen: '',
    created_at: new Date()
  };

  editar : boolean = false;

  constructor( private personajesService: PersonajesService, private route : Router, private activateRoute: ActivatedRoute ) { }

  ngOnInit() {

    

    const params = this.activateRoute.snapshot.params;
    console.log(params);
    if (params.id){
      this.personajesService.capturaPersonaje(params.id)
      .subscribe(
        res=>{
          console.log(res)
          this.personaje=res;
          this.editar = true;
        },
        err=> console.error(err)
      )
    }

  }

  guardarPersonajeNuevo(){
    delete this.personaje.created_at;
      delete this.personaje.id;

      this.personajesService.guardarPersonaje(this.personaje)
      .subscribe(
        res =>{
          console.log(res);
          this.route.navigate(['/games/personajes'])
        },
        err=> console.error(err)
      )

  }

  actualizarPersonaje(){

    delete this.personaje.created_at;

    this.personajesService.actualizarPersonaje(this.personaje.id, this.personaje)
      .subscribe(
        res =>{
          console.log(res)
          this.route.navigate(['/games/personajes']);
        },
        err => console.error(err)
      )

    }

}
