import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserI } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    this.validarSeccion();
   }

  private validarSeccion(){
    if(this.authService.getToken()==null){
      return false;
     }else{
      alert("Ya estas loguiado!");
      this.router.navigateByUrl(''); 
     }
  }
  ngOnInit() {
  }

  onLogin(form): void {
    //console.log('login',form.value);
    this.authService.login(form.value).subscribe(res => {
      this.authService.tipoUsuario().subscribe(res2 => {
        if(res2.tipo=='editor'){
          this.router.navigateByUrl('VistaEditor');
        }
        else{
          if(res2.tipo=="autor"){
            this.router.navigateByUrl('VistaAutor');
          }else{
            if(res2.tipo=="par"){
              this.router.navigateByUrl('VistaPar');
            }
            else{
              this.router.navigateByUrl('');
            }

          }
        } 
      }); 
      
    });
  }

  /*toggle(){
    var nombre= document.getElementById("hey").className;
    if(nombre == "menu-toggle"){
      document.getElementById("hey").className ="menu-toggle active";
      document.getElementById("hey1").className ="nav active";
    }else{
      document.getElementById("hey").className ="menu-toggle";
      document.getElementById("hey1").className ="nav";
    }
    
  }*/
}
