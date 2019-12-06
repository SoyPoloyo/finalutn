import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from '../../modelos/Game';
import { ActivatedRoute, Router } from '@angular/router';

import {GamesService} from '../../servicios/games.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  editar : boolean = false;

  constructor(private gamesService: GamesService , private route : Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    const params = this.activateRoute.snapshot.params;
    console.log(params);
    if (params.id){
      this.gamesService.capturaGame(params.id)
      .subscribe(
        res=>{
          console.log(res)
          this.game=res;
          this.editar = true;
        },
        err=> console.error(err)
      )
    }
  }

  guardarJuegoNuevo(){
      delete this.game.created_at;
      delete this.game.id;

      this.gamesService.guardarGame(this.game)
        .subscribe(
          res =>{
            console.log(res);
            this.route.navigate(['/games'])
          },
          err=> console.error(err)
        )
    }

  actualizarJuego(){

    delete this.game.created_at;

    this.gamesService.actualizarGame(this.game.id, this.game)
      .subscribe(
        res =>{
          console.log(res)
          this.route.navigate(['/games']);
        },
        err => console.error(err)
      )

    }

}
