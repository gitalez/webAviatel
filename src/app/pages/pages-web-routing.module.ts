import { Routes, RouterModule } from "@angular/router";

//rutas disponibles
import { PortafolioComponent } from "./portafolio/portafolio.component";
import { AboutComponent } from "./about/about.component";
import { ItemComponent } from "./item/item.component";
import { BlogComponent } from "./blog/blog.component";
import { SearchComponent } from "./search/search.component";
import { DocsComponent } from "./docs/docs.component";
import { IotComponent } from "./iot/iot.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { PagesWebComponent } from "./pages-web.component";

const appRoutes: Routes = [

  // el path vacio : '' tiene que esta a lo ultimo
  // dentro del pageswebcomponent definimos hijas rutas mediante un arreglo
  //estas rutas hijas trabajan con el outlet secundario que esta en pageswebcomponent
  // un parametro opcional del path es data , que se pasa como un objeto
  // dentro colocamos un titulo que sera lo que se necesite

  { path: "web",
    component: PagesWebComponent,

    children: [
     
      { path: "home", component: PortafolioComponent,data: {titulo: 'Principal',descripcion: 'Pagina principal'}},
      { path: "about", component: AboutComponent },
      { path: "blog", component: BlogComponent },
      { path: "docs", component: DocsComponent },
      { path: "iot", component: IotComponent },
      { path: "contacto", component: ContactoComponent },
      { path: "search/:termino", component: SearchComponent },
      { path: "item/:id", component: ItemComponent },
      { path: "", component: PortafolioComponent,data: {titulo: 'Principal',descripcion: 'Pagina principal'}},
      //{path: '',redirectTo: 'home', pathMatch: 'full'}

    ]
  }
];

//le decimos al routermodule que exporte el arreglo de rutas hojas PAGES_ROUTES_WEB
export const PAGES_ROUTES_WEB = RouterModule.forChild(appRoutes);
