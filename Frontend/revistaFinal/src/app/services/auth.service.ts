import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserI} from '../models/user';
import{ArticuloI} from '../models/articulo'
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
   getToken():string{
    if(!this.token){
      this.token =localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

  subirArticulo(articulo): Observable<JwtResponseI>{
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/createArticulo`,
    articulo).pipe(tap(
      (res: JwtResponseI)=>{
        if(res.error){
          if(res.error.mensaje=="Error Subir"){
            alert("Error en subir Articulo!");
        }  
        }else{
          if(res.exito){
            alert("Articulo Enviado!");
          }
        }
        
      }
    )
    );
  }

  uploadFile(formData) {
    return this.httpClient.post(`${this.AUTH_SERVER}/api/upload`, formData);
  }

  tipoUsuario() {
    return this.httpClient.post<UserI>(`${this.AUTH_SERVER}/tipoUsuario`,{token:this.getToken()});
  }

  listarArticulos() {
    return this.httpClient.get<ArticuloI[]>(`${this.AUTH_SERVER}/listarArticulos`).subscribe(data=>console.log(data));
  }
}
