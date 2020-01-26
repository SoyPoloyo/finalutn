import { Component, OnInit, HostBinding } from '@angular/core';
import { MisionesService } from 'src/app/servicios/misiones.service';
import { Misiones } from 'src/app/modelos/misiones';

@Component({
  selector: 'app-misiones',
  templateUrl: './misiones.component.html',
  styleUrls: ['./misiones.component.css']
})
export class MisionesComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  misiones: any = [];

  constructor( private misionesServicio: MisionesService) { }

  ngOnInit() {

    this.tomarMisiones();
  }

  tomarMisiones(){

    this.misionesServicio.capturaMisiones().subscribe(

      res => {

        this.misiones = res;


      },
      err => console.error(err)
    );
  }


  eliminarMision(id:string){
    this.misionesServicio.borrarMisiones(id).subscribe(
    res=> {
          console.log(res);
          this.tomarMisiones();
    },
    err=> console.error(err)
    )
    }

}
