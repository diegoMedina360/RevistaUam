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
  private articulo:ArticuloI=null;
  private url:string;
  constructor(private authService: AuthService, private router: Router) {
    this.validarSeccion();
    this.authService.listarArticulos().subscribe(data=>{this.listaArticulos=data,console.log(this.listaArticulos)});
    this.authService.listarAutores().subscribe(data=>{this.listaAutores=data,console.log(this.listaAutores)});
    this.authService.listarPares().subscribe(data=>{this.listaPares=data,console.log(this.listaPares)});
    this.url=this.authService.getArt();
    this.authService.listarArticuloId(this.url).subscribe(data=>{this.articulo=data,console.log(this.articulo)});
    this.authService.asignarPar(this.articulo);
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
      if(this.authService.getArt()==null) {
        this.router.navigateByUrl('VistaEditor');
      }
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
  public Asignarpar(par1,par2,Estado){
    console.log(par1.value);
    var nombrepar = par1.value;
    //console.log(id);
    par2.innerHTML = '<p>Par Asignado: '+nombrepar+'</p>';
    Estado.innerHTML = '<p>Estado: Enviado para Calificar</p>';
  }
  public Asignarpar2(par1){
    this.authService.asignarPar(this.articulo);
    console.log("este:",par1.value);
  }

}
