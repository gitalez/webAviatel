import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'aviatel';

  constructor(public infoPaginaService: InfoPaginaService, 
    public productosService: ProductosService, 
    ){

    // con solo intectar en el constructor el servicio 
    // angula va a llamar el servicio 
    // y se vera por ejemplo lo que dice el console.log

  }


}
