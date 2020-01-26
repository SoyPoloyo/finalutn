import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Misiones } from '../modelos/misiones';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MisionesService {

  API_URI = 'http://localhost:3000/api';

  constructor( private http:HttpClient ) { }

  capturaMisiones(){
    return this.http.get(`${this.API_URI}/misiones`);
  }

  capturaMisione(id:string){
    return this.http.get(`${this.API_URI}/misiones/${id}`);
  }

  borrarMisiones(id:string){
    return this.http.delete(`${this.API_URI}/misiones/${id}`);
  }

  guardarMisiones(mision: Misiones){
    return this.http.post(`${this.API_URI}/misiones`,mision);
  }

  actualizarMisiones(id:string|number, actualizadoMision:Misiones): Observable<Misiones>{
    return this.http.put(`${this.API_URI}/misiones/${id}`, actualizadoMision);
  }



}
