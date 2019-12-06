import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {PaginaPrincipalComponent} from './pagina-principal/pagina-principal.component';
//import { LoginComponent } from './auth/login/login.component';
//import { RegisterComponent } from './auth/register/register.component';
import { PublicarArticuloComponent } from './publicar-articulo/publicar-articulo.component';
import { VistaAutorComponent } from './vista-autor/vista-autor.component';
import { VistaEditorComponent } from './vista-editor/vista-editor.component';
import { ListaAutoresParesComponent } from './lista-autores-pares/lista-autores-pares.component';
import { AsignarParComponent } from './asignar-par/asignar-par.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { VistaParComponent } from './vista-par/vista-par.component';
const routes:Routes=[{path:'',component:PaginaPrincipalComponent},
                    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
                    //{path:'login',component:LoginComponent},
                    //{path:'register',component:RegisterComponent},
                    {path:'PublicarArticulo',component:PublicarArticuloComponent},
                    {path:'VistaAutor',component:VistaAutorComponent},
                    {path:'VistaEditor',component:VistaEditorComponent},
                    {path:'ListaEditor',component:ListaAutoresParesComponent},
                    {path:'VistaPar',component:VistaParComponent},
                    {path:'AsignarPar',component:AsignarParComponent}];
@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    //LoginComponent,
    //RegisterComponent,
    PublicarArticuloComponent,
    VistaAutorComponent,
    VistaEditorComponent,
    ListaAutoresParesComponent,
    AsignarParComponent,
    PaginaPrincipalComponent,
    VistaParComponent
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
