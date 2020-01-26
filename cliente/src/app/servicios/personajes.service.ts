import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Personajes } from '../modelos/personaje'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  API_URI = 'http://localhost:3000/api';

  constructor( private http:HttpClient ) { }

  capturaPersonajes(){
    return this.http.get(`${this.API_URI}/personajes`);
  }

  capturaPersonaje(id:string){
    return this.http.get(`${this.API_URI}/personajes/${id}`);
  }

  borrarPersonaje(id:string){
    return this.http.delete(`${this.API_URI}/personajes/${id}`);
  }

  guardarPersonaje(personaje: Personajes){
    return this.http.post(`${this.API_URI}/personajes`,personaje);
  }

  actualizarPersonaje(id:string|number, actualizadoPersonaje:Personajes): Observable<Personajes>{
    return this.http.put(`${this.API_URI}/personajes/${id}`, actualizadoPersonaje);
  }



}
