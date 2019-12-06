import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserI } from '../models/user';
@Component({
  selector: 'app-asignar-par',
  templateUrl: './asignar-par.component.html',
  styleUrls: ['./asignar-par.component.css']
})
export class AsignarParComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
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
