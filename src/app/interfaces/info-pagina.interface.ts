
// para hecer la interface: 
// copiamos el json entero del file data-pagina
// hacemos shif cmd p
// se nos abre una ventana 
// colocamos  json 
 // elegimos  json to convert to TS 
// y nos genera la interfase solita 

 export interface InfoPagina {
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tublr?: string;
  equipo_trabajo?: any[];
}

