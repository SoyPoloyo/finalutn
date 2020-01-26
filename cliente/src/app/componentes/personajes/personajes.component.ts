import { Component, OnInit, HostBinding } from '@angular/core';
import { PersonajesService } from 'src/app/servicios/personajes.service';
import { Personajes } from 'src/app/modelos/personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  personajes: any = [];
 


  constructor(private personajesServicio: PersonajesService) { }

  ngOnInit() {
    this.tomarPersonajes();
  }

  tomarPersonajes() {

    
    
    this.personajesServicio.capturaPersonajes().subscribe(

      res => {

        this.personajes = res;


      },
      err => console.error(err)
    );
}

eliminarGame(id:string){
this.personajesServicio.borrarPersonaje(id).subscribe(
res=> {
      console.log(res);
      this.tomarPersonajes();
},
err=> console.error(err)
)
}




}
