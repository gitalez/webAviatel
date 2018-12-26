import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SearchComponent } from './pages/search/search.component';
import { DocsComponent } from './pages/docs/docs.component';
import { IotComponent } from './pages/iot/iot.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [

  {path: 'home', component: PortafolioComponent },
  {path: 'about', component: AboutComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'docs', component: DocsComponent },
  {path: 'iot', component: IotComponent },
  {path: 'contacto', component: ContactoComponent },
  {path: 'search/:termino', component: SearchComponent },
  {path: 'item/:id', component: ItemComponent  },
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// el usehash es para decirle a los servidores que lo que viene es un file
// y no una carpeta

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
