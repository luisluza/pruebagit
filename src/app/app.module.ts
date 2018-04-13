import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MicomponenteComponent } from './micomponente/micomponente.component';
import { OtrocomponenteComponent } from './otrocomponente/otrocomponente.component';
import { ComponentesincssComponent } from './componentesincss/componentesincss.component';


@NgModule({
  declarations: [
    AppComponent,
    MicomponenteComponent,
    OtrocomponenteComponent,
    ComponentesincssComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
