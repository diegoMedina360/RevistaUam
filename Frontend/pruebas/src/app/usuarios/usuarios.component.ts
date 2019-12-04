import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public usuarios: string[];
  
  constructor() { 
    this.usuarios = ["Diego", "Mario"];

  }

  public Agregar(r) {
    
    this.usuarios.push(r);
  }
  public Comparar(r:string="s"){
    
    let respuesta:string;
    if(r=="10100"){
      return "Correcto, es la cadena de Adn!!";

    }
    else{
      return "No corresponde a la cadena de Adn!";
    }

  }

  title = "CodeSandboxs";
  ngOnInit() {
    jQuery('#divHolaMundo').text('Hola mundo');
    //jQuery('#menu').menu();
  }

}
