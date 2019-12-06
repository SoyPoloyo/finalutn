import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../modelos/usuario';
import { ActivatedRoute, Router} from '@angular/router';

import { UsuariosService } from '../../servicios/usuarios.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = {
    id: 0,
    nombre: '',
    password: '',
    created_at: new Date()
  };

  constructor(private usuariosServicio: UsuariosService, private route : Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  guardarUsuarioNuevo(){
    delete this.usuario.created_at;
    delete this.usuario.id;

    this.usuariosServicio.guardarUsuario(this.usuario)
      .subscribe(
        res =>{
          console.log(res);
          this.route.navigate(['/inicio'])
        },
        err=> console.error(err)
      )
  }

}
