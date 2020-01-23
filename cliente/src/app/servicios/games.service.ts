import { Injectable } from '@angular/core';

//rutas http 
import {HttpClient} from '@angular/common/http'

//

import {Game} from '../modelos/Game'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { 
    
  }

  capturaGames(){
    return this.http.get(`${this.API_URI}/games`);
  }

  capturaGame(id:string ){
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  borrarGame(id:string){
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  guardarGame(game: Game){
    return this.http.post(`${this.API_URI}/games`, game);
  }

  actualizarGame(id:string|number, acutalizadoGame:Game): Observable<Game>{
    return this.http.put(`${this.API_URI}/games/${id}`, acutalizadoGame);
  }

}
