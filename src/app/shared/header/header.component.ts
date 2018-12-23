import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // inyectando el servicio accedo a las propiedades de este servicio 
  // como info 
  constructor( public infoPaginaService: InfoPaginaService, private router: Router) { }

  ngOnInit() {
  }

  buscarProducto(termino: string){


    console.log(termino);

    if(termino.length < 1){ // para que no busque en blanco 
      return;
    }
// para nevegar entre componentes , importo el navigate de router 
// y navego hacia la pagina search con  el termino de busqueda 
// en search.co me subscrivo a recibir este enlace 

 this.router.navigate(['/search', termino])


  }

}
