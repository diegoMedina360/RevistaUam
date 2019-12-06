import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserI } from '../models/user';

import { Router } from '@angular/router';
import { ArticuloI } from '../models/articulo';
@Component({
  selector: 'app-calificar-par',
  templateUrl: './calificar-par.component.html',
  styleUrls: ['./calificar-par.component.css']
})
export class CalificarParComponent implements OnInit {
  private listaAutores:UserI[]=null;
  private listaPares:UserI[]=null;
  private articulo:ArticuloI=null;
  private url:string;
  constructor(private authService: AuthService, private router: Router) {
    this.validarSeccion();
    //this.authService.listarArticulos().subscribe(data=>{this.listaArticulos=data,console.log(this.listaArticulos)});
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
        if(res.tipo=='par'){}
        else{
          this.router.navigateByUrl('');
        }
        
      });
      if(this.authService.getArt()==null) {
        alert("No tiene Articulos Asignados!");
        this.router.navigateByUrl('VistaPar');
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

}
