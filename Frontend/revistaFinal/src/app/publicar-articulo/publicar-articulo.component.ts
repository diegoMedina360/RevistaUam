import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ArticuloI } from '../models/articulo';
//import { runInThisContext } from 'vm';
@Component({
  selector: 'app-publicar-articulo',
  templateUrl: './publicar-articulo.component.html',
  styleUrls: ['./publicar-articulo.component.css']
})
export class PublicarArticuloComponent implements OnInit {
 
  uploadedFiles: Array < File > ;
  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit() {
  }
  validarSeccion(){
    if(this.authService.getToken()==null){
      alert("Debe estar Logiado para subir articulos");
      this.router.navigateByUrl('auth/login');
    
     }else{
       return false;
     }

  }
  private subido: boolean=false;
  private ruta=null;
  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }
  //Cragar el archivo primero
  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.authService.uploadFile(formData).subscribe((res)=> {
      console.log('response received is ', res);
      this.subido=true;
      this.ruta=res;
    });
    }

  createArt(form): void {
 console.log(this.authService.getToken());
 if(this.authService.getToken()==null){
  alert("Debe estar Logiado para subir articulos");
  this.router.navigateByUrl('auth/login');

 }
 else{
  if(this.subido==true){
    //console.log('Archivo',form.value);
    var dataEnviar={
      titulo:form.controls['titulo'].value,
      descripcion:form.controls['titulo'].value,
      url:""+this.ruta.message,
      autor:this.authService.getToken()
    }
    //console.log('Archivo',dataEnviar);
    this.authService.subirArticulo(dataEnviar).subscribe(res => {
      this.router.navigateByUrl('VistaAutor');
    });
    
  }
  else{
    alert("Suba Primero el Archivo!");
  }

 }
    
    
    
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