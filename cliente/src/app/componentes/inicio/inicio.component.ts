import { Component, OnInit } from '@angular/core';

import {Usuario} from '../../modelos/usuario';
import { ActivatedRoute, Router} from '@angular/router';

import { UsuariosService } from '../../servicios/usuarios.service';
import { Subscriber } from 'rxjs';
import { Alert } from 'selenium-webdriver';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { $, element } from 'protractor';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario: Usuario = {
    id: 0,
    nombre: '',
    password: '',
    created_at: new Date()
  };

  credencial : boolean = false;

  usuarios: any = [];
  
  public identificador;
	public usuarioI;


  constructor(private usuariosServicio: UsuariosService, private route : Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    this.identificador = localStorage.getItem("id");
    this.usuarioI = localStorage.getItem("nombre");
    
  }



  validarUsuario(){

    this.usuariosServicio.capturaUsuarios().subscribe(

      res => {
        this.usuarios = res;


         var i = 0;

          do {

            if(this.usuario.nombre == res[i].nombre && 
               this.usuario.password == res[i].password){

                this.identificador = res[i].id;
                this.usuarioI = res[i].nombre;
    
                localStorage.setItem("id", this.identificador);
                localStorage.setItem("nombre", this.usuarioI);

              this.credencial= true;
              console.log('funciona')
              this.route.navigate(['/inicio/usuarios']);
              

            }else{
              console.log('no funciona')
            }
                  var nombre = res[i].nombre ;
                  var password = res[i].password ;
           
          i++
          } while ( i < this.usuarios.length);

        
      },

           err => console.error(err)
    );



}

cerrarSesion(){

  localStorage.removeItem("id");
  localStorage.removeItem("nombre");
  localStorage.clear();
  this.identificador = null;
  this.usuarioI = null;

}


}
