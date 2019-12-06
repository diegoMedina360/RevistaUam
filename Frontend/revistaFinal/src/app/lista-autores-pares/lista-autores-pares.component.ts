import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserI } from '../models/user';
@Component({
  selector: 'app-lista-autores-pares',
  templateUrl: './lista-autores-pares.component.html',
  styleUrls: ['./lista-autores-pares.component.css']
})
export class ListaAutoresParesComponent implements OnInit {
  private listaAutores:UserI[]=null;
  private listaPares:UserI[]=null;

  constructor(private authService: AuthService, private router: Router) {
    this.validarSeccion();
    //authService.tipoUsuario();
    this.authService.listarAutores().subscribe(data=>{this.listaAutores=data,console.log(this.listaAutores)});
    this.authService.listarPares().subscribe(data=>{this.listaPares=data,console.log(this.listaPares)});
    //authService.listarArticulos();
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
}
