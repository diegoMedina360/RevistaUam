import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserI} from '../models/user';
import {JwtResponseI} from '../models/jwt-response';
import {tap} from 'rxjs/operators';
import {Observable,BehaviorSubject} from 'rxjs';

  import { from } from 'rxjs';
@Injectable()
export class AuthService {
  AUTH_SERVER: string= 'http://localhost:3000';
  authSubject= new BehaviorSubject(false);
  private token: string;
  constructor(private httpClient: HttpClient) { }

  register(user:UserI): Observable<JwtResponseI>{
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/register`,
    user).pipe(tap(
      (res: JwtResponseI)=>{
        if(res.error){
          if(res.error.mensaje=="Email ya existe"){
            alert("Registro InCorrecto: Email ya existe");
        }  
        }else{
          if(res.dataUser){
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
            alert("Registro Correcto");
          }
        }
        
      }
    )
    );
  }

  login(user:UserI): Observable<JwtResponseI>{
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`,
    user).pipe(tap(
      (res: JwtResponseI)=>{
        //alert(res.error.mensaje);
        if(res.error){
          if(res.error.mensaje=="Datos incorrectos"){
            alert("Datos Incorrectos");
            alert(res.error.mensaje);
        }
        }else{
          
          if(res.dataUser){
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
            alert("Login Correcto");
          }
        }
      }
    )
    );
  }

  logout(){
    this.token= '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRE_IN");
  }

  private saveToken(token:string,expiresIn:string): void{
    localStorage.setItem("ACCESS_TOKEN",token);
    localStorage.setItem("EXPIRE_IN",expiresIn);
    this.token= token;
  }
  private getToken():string{
    if(!this.token){
      this.token =localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}