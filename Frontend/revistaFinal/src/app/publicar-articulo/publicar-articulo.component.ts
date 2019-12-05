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
  subido: boolean=false;
  private ruta;
  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }
  
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
    console.log('Archivo',form.value);
    if(this.subido==true){
  
    /*var dataEnviar:ArticuloI={
        titulo:" ds",
        descripcion:" df",
        url:this.ruta
      }*/
      this.authService.subirArticulo(form.value).subscribe(res => {
        this.router.navigateByUrl('VistaAutor');
      });
      this.subido=false;
    }
    else{
      alert("Suba Primero el Archivo!");
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