import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-autor',
  templateUrl: './vista-autor.component.html',
  styleUrls: ['./vista-autor.component.css']
})
export class VistaAutorComponent implements OnInit {

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
