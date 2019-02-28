// este servicio lo inicializamos  en el app.component Y tambien en el portafolio

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// hay que exportar la interafce
import { Producto } from "../interfaces/producto.interface";

@Injectable({
  providedIn: "root"
})
export class ProductosService {
  cargando = true; // bandera de cargar productos_idx cuando se inicializa la clase

  productos: Producto[] = []; // array de todos lao productos

  productosFiltrado: Producto[] = []; // array de productos que quedan despues del filtro buscar , en search componnet

  constructor(private http: HttpClient) {
    // cuando se inicializa cargo en this.productos todos los productos de firebase
    this.cargarProductos();
  }

  cargarProductos() {
    return new Promise((resolve, reject) => {
      this.http
        .get("https://producto-db-avia.firebaseio.com/productos_idx.json")
        .subscribe((resp: Producto[]) => {
          console.log(resp);
          this.productos = resp;

          setTimeout(() => {
            this.cargando = false;
          }, 1);

          resolve();
        });
    });
  }

  // obtengo de firebase un producto indicado por su id

  getProducto(id: string) {
    return this.http.get(
      `https://producto-db-avia.firebaseio.com/productos/${id}.json`
    );
    // no hacemos el subscribe aqui proque necesito retornar todo este objeto
    // para utilizarlo en donde llamo el servicio
    // regreso este observable con return para que utilice esta info item.component.ts
    // el subscribe se llamara donde se llame este servicio
  }

  // primero se cargan los productos y luego porductos filtrado
  // producto filtrado la carga es mas rapida que productos
  // cuando se recarga la pagina , puede aparecer vacio/
  // oir esto lo resolvemos con una promesa en cargar productos

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      // mo existe this.productos
      // cargar productos

      this.cargarProductos().then(() => {
        // este then espera el resiltado de la promesa
        //se ejecuta despues de tener los productos
        // aplicar filtro
        this.filtrarProductos(termino);
      });
    } else {
      // aplicar filtro
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    termino = termino.toLocaleLowerCase();

    this.productosFiltrado = [];

    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();

      if (
        prod.categoria.indexOf(termino) >= 0 ||
        tituloLower.indexOf(termino) >= 0
      ) {
        this.productosFiltrado.push(prod);
      }
    });
  }
}
