import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion; // no lo inicializamos para que no de error 
// si lo inicializo con {} debo declarar los propiedades en la interface como opcionales (?)

id: string;

  constructor(private route: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit() {

     this.route.params
     .subscribe(parametros=>{
       console.log(parametros['id']); // nos subscribimos a todos los parametros que vayan pasando , por eso el array
     this.productoService.getProducto(parametros['id'])
     .subscribe((producto: ProductoDescripcion) =>{
       console.log(producto);
       this.producto = producto;
       this.id = parametros['id'];
     })

      })
  }

}
