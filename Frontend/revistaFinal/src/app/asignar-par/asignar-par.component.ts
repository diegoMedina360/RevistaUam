import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignar-par',
  templateUrl: './asignar-par.component.html',
  styleUrls: ['./asignar-par.component.css']
})
export class AsignarParComponent implements OnInit {

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

  public Asignarpar(par1,par2,Estado){
    var nombrepar = par1.value;
    par2.innerHTML = '<p>Par Asignado: '+nombrepar+'</p>';
    Estado.innerHTML = '<p>Estado: Enviado para Calificar</p>';
  }


}
