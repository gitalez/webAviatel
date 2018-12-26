import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, public productosService: ProductosService) { }

  ngOnInit() {

    // route escucha lo que que envia por la url 

    this.route.params
    .subscribe(params =>{

      console.log(params['termino']);
      let termino = params['termino'];
      this.productosService.buscarProducto(termino)
    });
  }

}