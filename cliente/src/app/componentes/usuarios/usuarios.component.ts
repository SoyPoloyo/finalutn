import { Component, OnInit, HostBinding } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router'; 
import { Usuario } from 'src/app/modelos/usuario';


import {UsuariosService} from '../../servicios/usuarios.service';
import { Subscriber } from 'rxjs'
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  usuario: Usuario = {
    id: 0,
    nombre: '',
    password: '',
    created_at: new Date()
  };

  editar : boolean = false;

  constructor(private usuariosServicio: UsuariosService, private route : Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    const params = this.activateRoute.snapshot.params;
    console.log(params);
    if (params.id){
      this.usuariosServicio.capturaUsuario(params.id)
      .subscribe(
        res=>{
          console.log(res)
          this.usuario=res;
          this.editar = true;
        },
        err=> console.error(err)
      )
    }
  }

  guardarUsuarioNuevo(){
    delete this.usuario.created_at;
    delete this.usuario.id;

    this.usuariosServicio.guardarUsuario(this.usuario)
      .subscribe(
        res =>{
          console.log(res);
          
        },
        err=> console.error(err)
      )
  }

  actualizarUsuario(){

    delete this.usuario.created_at;

    this.usuariosServicio.actualizarUsuario(this.usuario.id, this.usuario)
      .subscribe(
        res =>{
          console.log(res)
          alert('Usuario actualizado')
         
        },
        err => console.error(err)
      )

    }
  cerrarSesion(){

  localStorage.removeItem("id");
  localStorage.removeItem("nombre");
  localStorage.clear();
  this.route.navigate(['/inicio']);

  document.getElementById("linklogin").removeAttribute("hidden");
  document.getElementById("linkgame").hidden=true;
  document.getElementById("linkaddgame").hidden=true;
  document.getElementById("linkusuario").hidden=true;
  

}

}
