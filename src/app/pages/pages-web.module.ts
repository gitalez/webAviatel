import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// modulos
import {PAGES_ROUTES_WEB} from './pages-web-routing.module';


//paginas
import { FooterComponent } from '../shared/footer/footer.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { BlogComponent } from './blog/blog.component';
import { DocsComponent } from './docs/docs.component';
import { SearchComponent } from './search/search.component';
import { IotComponent } from './iot/iot.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HeaderComponent } from '../shared/header/header.component';
import { PagesWebComponent } from './pages-web.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    BlogComponent,
    DocsComponent,
    SearchComponent,
    IotComponent,
    ContactoComponent,
    PagesWebComponent
  ],

  imports: [
    BrowserModule,
    PAGES_ROUTES_WEB,
    CommonModule,
    HttpClientModule,
   
  ],
  exports:[
    HeaderComponent,
    FooterComponent
 ],

})
export class PagesWebModule {}
