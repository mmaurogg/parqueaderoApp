import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ParqueaderosComponent } from './components/parqueaderos/parqueaderos.component';
import { AutosComponent } from './components/autos/autos.component';

@NgModule({
  declarations: [
    AppComponent,
    ParqueaderosComponent,
    AutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
