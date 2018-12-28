import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InmueblesComponent } from './components/inmuebles/inmuebles.component';
import { APPROUTING  } from "./app.routes";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    InmueblesComponent
  ],
  imports: [
    BrowserModule,
    APPROUTING,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent,
    ]
})
export class AppModule { }
