import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserI } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegister(form): void {
    this.authService.register(form.value).subscribe(res => {
      this.router.navigateByUrl('/auth');
    });
  }

  sololetras(e){
    var key = e.keyCode || e.which;

    var teclado = String.fromCharCode(key);

    var letras = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZÑ";

    var especiales = "8-37-38-46-164";


    if(letras.indexOf(teclado)==-1)
    {
        return false;
    }
  }

  solonumeros(e){
    var key = e.keyCode || e.which;

    var teclado = String.fromCharCode(key).toLowerCase();

    var numeros = "1234567890";

    if(numeros.indexOf(teclado)==-1)
    {
        return false;
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
