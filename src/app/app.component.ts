import { Component } from '@angular/core';
import { Paciente } from './paciente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appppppppp';
  nombre:String ="Hellllo";

  pacientes:Paciente[]=[];

  constructor() {
        this.pacientes.push(new Paciente(0,"Luis","Luza",30,"44444444","M"));
        this.pacientes.push(new Paciente(0,"Flavio","Balu",30,"44444444","M"));
        this.pacientes.push(new Paciente(0,"Ameth","RAA",30,"44444444","M"));
  }
}
