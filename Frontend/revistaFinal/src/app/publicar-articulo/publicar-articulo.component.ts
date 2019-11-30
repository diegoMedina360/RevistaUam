import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicar-articulo',
  templateUrl: './publicar-articulo.component.html',
  styleUrls: ['./publicar-articulo.component.css']
})
export class PublicarArticuloComponent implements OnInit {

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