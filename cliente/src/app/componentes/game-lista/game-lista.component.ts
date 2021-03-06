import { Component, OnInit, HostBinding } from '@angular/core';

import { GamesService } from '../../servicios/games.service'
import { Game } from 'src/app/modelos/Game';


@Component({
  selector: 'app-game-lista',
  templateUrl: './game-lista.component.html',
  styleUrls: ['./game-lista.component.css']
})
export class GameListaComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  games: any = [];
  public gamesid: any = [];
  user_id: string = document.getElementById("linkusuario").textContent;

  constructor( private juegosServicio: GamesService) { }

  ngOnInit() {
    this.tomarJuegos();
  }

  tomarJuegos() {

    
    
          this.juegosServicio.capturaGame(localStorage.id).subscribe(

            res => {

              this.games = res;
              this.gamesid = res[0].id

            },
            err => console.error(err)
          );
  }

  eliminarGame(id:string){
    this.juegosServicio.borrarGame(id).subscribe(
      res=> {
            console.log(res);
            this.tomarJuegos();
      },
      err=> console.error(err)
    )
  }

  
    redireccionPersonajes(tomarJuegos){

  
            localStorage.setItem("card_id", this.games.id);

            console.log(this.gamesid);

            this.juegosServicio.capturaGame(localStorage.id).subscribe(

              res => {
                
                let i=0;
               
                this.gamesid = res[i].id
                console.log(this.games[1].id, "hola");
  
              },
              err => console.error(err)
            );


    
      }
 

}
