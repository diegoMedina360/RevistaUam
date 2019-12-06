import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { ArticuloI } from '../models/articulo';
@Component({
  selector: 'app-vista-editor',
  templateUrl: './vista-editor.component.html',
  styleUrls: ['./vista-editor.component.css']
})
export class VistaEditorComponent implements OnInit {
  private listaArticulos: ArticuloI[]=null;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.listarArticulos().subscribe(data=>{this.listaArticulos=data,console.log(this.listaArticulos)});
   
    this.validarSeccion();
   }

   validarSeccion(){
    if(this.authService.getToken()==null){
      alert("Necesitas Iniciar seccion!"); 
      this.router.navigateByUrl('auth/login');
     }
    else{
      this.authService.tipoUsuario().subscribe(res => {
        if(res.tipo=='editor'){}
        else{
          this.router.navigateByUrl('');
        }
        
      }); 
      return false;
     }
  }
  salir(){
    alert("Se cerro seccion correctamente!");
      this.authService.logout();
      this.router.navigateByUrl('');
  }
irAsignar(id){
  this.authService.saveArtId(id.value);
  console.log(id.value);
  alert(id.value);
  this.router.navigateByUrl('AsignarPar');
}

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
