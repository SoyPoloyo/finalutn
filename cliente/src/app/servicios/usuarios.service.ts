import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

import { Usuario } from '../modelos/usuario'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URI = 'http://localhost:3000/api';

  constructor( private http: HttpClient ) { }

  capturaUsuarios(){
    return this.http.get(`${this.API_URI}/registro`);
  }

  capturaUsuario(id:string){
    return this.http.get(`${this.API_URI}/registro/${id}`);
  }

  borrarUsuario(id:string){
    return this.http.delete(`${this.API_URI}/registro/${id}`);
  }

  guardarUsuario(usuario: Usuario){
    return this.http.post(`${this.API_URI}/registro`,usuario);
  }

  actualizarGame(id:string|number, actualizadoUsuario:Usuario): Observable<Usuario>{
    return this.http.put(`${this.API_URI}/registro/${id}`, actualizadoUsuario);
  }
}
