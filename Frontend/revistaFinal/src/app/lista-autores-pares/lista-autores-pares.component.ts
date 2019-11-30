import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-autores-pares',
  templateUrl: './lista-autores-pares.component.html',
  styleUrls: ['./lista-autores-pares.component.css']
})
export class ListaAutoresParesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    var nombre= document.getElementById("hey").className;
    if(nombre == "menu-toggle"){
      document.getElementById("hey").className ="menu-toggle active";
      document.getElementById("hey1").className ="nav active";
    }else{
      document.getElementById("hey").className ="menu-toggle";
      document.getElementById("hey1").className ="nav";
    }
    
  }
}
