import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// rutas
import { APP_ROUTES } from './app-routing.module';

// modulos 
import { PagesWebModule } from './pages/pages-web.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// componentes
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesWebModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
