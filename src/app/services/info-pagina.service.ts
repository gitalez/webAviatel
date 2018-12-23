// al colocar root , ya no hace falta cargar este servicio en el app.module 
// para que se vea el console.log o cualquier otra cosa 
// tenemos que inyectar este servicio en algun componente 
// por ejemplo lo inyectamos en el constructor del app.component.ts
// aqui leemos el json 
// necesito un modulo http



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: any[] =[];

  cargada = false;


  // cuando se dispare este servicio , leera el json por http
  constructor( private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();

   }

   private cargarInfo(){

    console.log('servicio info-pagina listo');

    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      // resp  ya no es un json , es un obj de js

      this.cargada = true;
      this.info = resp; // esto lo hacemos para poder utilizar la info de resp en otros lados 
      console.log(resp);
      // este clg se usa cuando resp es de tipo any , cuando se lo asignamos a una interface ya se puede hacer 
      // resp.twitter
      console.log(resp['twitter']); // de la respuesta me interesa la propiedad twitter
    });

   }

   // no hicimos una inteerface de equipo 
   private cargarEquipo(){

    this.http.get('https://producto-db-avia.firebaseio.com/equipo.json')
    .subscribe((resp: any[]) => {

      // resp  ya no es un json , es un obj de js
      this.equipo = resp  // esto lo hacemos para poder utilizar la info de resp en otros lados 
      console.log(resp);
      
    });

   }

}
