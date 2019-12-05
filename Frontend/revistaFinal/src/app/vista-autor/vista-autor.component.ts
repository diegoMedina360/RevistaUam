import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserI } from '../models/user';

@Component({
  selector: 'app-vista-autor',
  templateUrl: './vista-autor.component.html',
  styleUrls: ['./vista-autor.component.css']
})
export class VistaAutorComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    this.validarSeccion();
   }

  validarSeccion(){
    if(this.authService.getToken()==null){
      alert("Debe estar Logiado primero!");
      this.router.navigateByUrl('auth/login');
    
     }else{
       return false;
     }
  }
  salir(){
    alert("Se cerro seccion correctamente!");
      this.authService.logout();
      this.router.navigateByUrl('');
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
