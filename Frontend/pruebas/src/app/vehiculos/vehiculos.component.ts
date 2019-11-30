import { Component, OnInit } from '@angular/core';
import {RemotoService} from '../remoto.service';
import {Iremota} from '../Iremota';
import { from } from 'rxjs';
@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  name = 'Angular';
 array: string[] ;
  public json: Iremota[]=null;
  constructor(private informacionweb:RemotoService){}

  ngOnInit(){}

  public enviardatos(placa,marca)
  {
    //this.informacionweb.enviardatos(placa,marca);
    this.informacionweb.enviardatos(placa,marca).subscribe(data=>{this.json=data,console.log(this.json)});
    ///console.log(placa.value);
    //alert(placa.value);
    //this.array.push(placa.value);



  }

}
