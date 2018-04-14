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
        
  }
}
