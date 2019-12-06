import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserI } from '../models/user';

import { ArticuloI } from '../models/articulo';
@Component({
  selector: 'app-asignar-par',
  templateUrl: './asignar-par.component.html',
  styleUrls: ['./asignar-par.component.css']
})
export class AsignarParComponent implements OnInit {
  private listaArticulos: ArticuloI[]=null;
  private listaAutores:UserI[]=null;
  private listaPares:UserI[]=null;
  constructor(private authService: AuthService, private router: Router) {
    this.validarSeccion();
    this.authService.listarArticulos().subscribe(data=>{this.listaArticulos=data,console.log(this.listaArticulos)});
    this.authService.listarAutores().subscribe(data=>{this.listaAutores=data,console.log(this.listaAutores)});
    this.authService.listarPares().subscribe(data=>{this.listaPares=data,console.log(this.listaPares)});
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

  idPar(ide){
    console.log(ide);
  }
  public Asignarpar(par,ide){
    console.log(par.value,ide.value);
    //var nombrepar = par1.value;
    //console.log(id);
    //par2.innerHTML = '<p>Par Asignado: '+nombrepar+'</p>';
    //Estado.innerHTML = '<p>Estado: Enviado para Calificar</p>';
  }


}
