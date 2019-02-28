import {Routes, RouterModule} from '@angular/router';


// component

const appRoutes: Routes  = [

     {path: '', redirectTo: '/web/home', pathMatch: 'full' },
     // cualquier otra ruta que no este efinida en el arreglo
     //{path: '**',component: NopagefoundComponent} 
];

//le decimos al routermodule que exporte el arreglo de rutas appRoutes
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
