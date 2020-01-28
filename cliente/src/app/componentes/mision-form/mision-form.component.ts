import { Component, OnInit, HostBinding} from '@angular/core';

import { Misiones } from '../../modelos/misiones';
import { ActivatedRoute, Router } from '@angular/router';

import { MisionesService } from '../../servicios/misiones.service';




@Component({
  selector: 'app-mision-form',
  templateUrl: './mision-form.component.html',
  styleUrls: ['./mision-form.component.css']
})
export class MisionFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  
  mision: Misiones = {
    id: 0,
    card_id: localStorage.card_id,
    nombre_mision: '',
    texto_mision: '',
    created_at: new Date()
  };

  editar : boolean = false;

  constructor( private misionesService: MisionesService, private route : Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    
    const params = this.activateRoute.snapshot.params;
    console.log(params);
    if (params.id){
      this.misionesService.capturaMision(params.id)
      .subscribe(
        res=>{
          console.log(res)
          this.mision=res;
          this.editar = true;
        },
        err=> console.error(err)
      )
    }

  }

  guardarMisionNueva(){
    delete this.mision.created_at;
      delete this.mision.id;

      this.misionesService.guardarMision(this.mision)
      .subscribe(
        res =>{
          console.log(res);
          this.route.navigate(['/games/misiones'])
        },
        err=> console.error(err)
      )

  }

  actualizarMision(){

    delete this.mision.created_at;

    this.misionesService.actualizarMisiones(this.mision.id, this.mision)
      .subscribe(
        res =>{
          console.log(res)
          this.route.navigate(['/games/misiones']);
        },
        err => console.error(err)
      )

    }

}
