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
        let i = 0;

          do {

            if(this.usuario.nombre == res[i].nombre && 
               this.usuario.password == res[i].password){

                this.identificador = res[i].id;
                this.usuarioI = res[i].nombre;
    
                localStorage.setItem("id", this.identificador);
                localStorage.setItem("nombre", this.usuarioI);

              console.log('funciona')
              this.route.navigate(['/inicio/usuarios',this.identificador]);

            

              document.getElementById("linkgame").removeAttribute("hidden");
              document.getElementById("linkaddgame").removeAttribute("hidden");
              document.getElementById("linkusuario").removeAttribute("hidden");
              document.getElementById("linklogin").hidden=true;
              

            }else{
              console.log('no funciona')
            }

          i++
          } while ( i < this.usuarios.length);

        
      },

           err => console.error(err)
    );

}


}
