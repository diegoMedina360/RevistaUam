import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserI } from '../models/user';
import { ArticuloI } from '../models/articulo';

@Component({
  selector: 'app-vista-par',
  templateUrl: './vista-par.component.html',
  styleUrls: ['./vista-par.component.css']
})
export class VistaParComponent implements OnInit {
  private listaArticulos: ArticuloI[]=null;
  constructor(private authService: AuthService, private router: Router) {
    this.validarSeccion();
    this.authService.listarMisArticulos().subscribe(data=>{this.listaArticulos=data,console.log(this.listaArticulos)});
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
