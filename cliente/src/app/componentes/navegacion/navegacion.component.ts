import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {


  credencial : boolean = false;


  constructor() { }

  ngOnInit() { 

    console.log(localStorage.id)

    if (localStorage.id != "") {

              
              
      document.getElementById("linkgame").removeAttribute("hidden");
      document.getElementById("linkaddgame").removeAttribute("hidden");
      document.getElementById("linkusuario").removeAttribute("hidden");
      document.getElementById("linklogin").hidden=true;

    }


  }


}