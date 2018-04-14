import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MicomponenteComponent } from './micomponente/micomponente.component';
import { OtrocomponenteComponent } from './otrocomponente/otrocomponente.component';
import { ComponentesincssComponent } from './componentesincss/componentesincss.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MicomponenteComponent,
    OtrocomponenteComponent,
    ComponentesincssComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
