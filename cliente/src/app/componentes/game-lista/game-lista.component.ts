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
  gamesid: any = [];

  constructor( private juegosServicio: GamesService) { }

  ngOnInit() {
    this.tomarJuegos();
  }

  tomarJuegos(){

          this.juegosServicio.capturaGames().subscribe(

            res => {

              this.games = res;
            

              console.log(this.games[""] , "fallo");


              for (let i = 0; i < this.games.length; i++) {

                      this.gamesid = this.games[i];
                      console.log(localStorage.id )

                if (this.gamesid.user_id == localStorage.id) {
  
                    console.log(this.games, ("hola"))

                    
                    
                    
                }

              }

              


              
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

 

}
