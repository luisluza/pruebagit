import { Component } from '@angular/core';
import { Paciente } from './paciente.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appppppppp';
  nombre:String ="Hellllo";

  pacientes:Paciente[]=[];

  constructor(private http:HttpClient) {

    this.obtenerPacientes().subscribe(data=>this.pacientes=data);

        /* this.pacientes.push(new Paciente(0,"Luis","Luza",30,"44444444","M"));
        this.pacientes.push(new Paciente(0,"Flavio","Balu",30,"44444444","M"));
        this.pacientes.push(new Paciente(0,"Ameth","RAA",30,"44444444","M")); */
  }

  obtenerPacientes():Observable <Paciente[]>{
    return this.http.get<Paciente[]>("http://localhost:8080/persona/listar");    
  }

  mostrar(paciente:any):void{
    alert(JSON.stringify(paciente));
  }
}
