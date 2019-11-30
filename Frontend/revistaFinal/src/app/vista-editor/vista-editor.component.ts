import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-editor',
  templateUrl: './vista-editor.component.html',
  styleUrls: ['./vista-editor.component.css']
})
export class VistaEditorComponent implements OnInit {

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
