import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { throws } from 'assert';
import {Iremota} from './Iremota'
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemotoService {

  constructor(private datos:HttpClient) { }

  public enviardatos(placa, marca){
      //this.datos.post('http://127.0.0.1:1337/vehiculos',{placa:''+placa.value,marca:''+marca.value}).subscribe(data=>{console.log(data)})
      //this.datos.get<Iremota[]>('http://127.0.0.1:1337/listarvehiculos/placa/'+placa.value).subscribe(data=>console.log(data));
      this.datos.get<Iremota[]>('http://127.0.0.1:1337/listarvehiculos/placa/').subscribe(data=>console.log(data));
      return this.datos.post<Iremota[]>('http://127.0.0.1:1337/vehiculos',{placa:''+placa.value,marca:''+marca.value});
  }
}
