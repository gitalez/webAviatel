// imports 
// importScripts('js/sw-utils.js')

// el app shell es lo que necesita la app para funcionar 
// eso lo vamos a poner en cache 

// creamos tres caches statico , dinamico e inmutable 
// que segun el recurso lo grabamos  en cada cual 

const CACHE_STATIC_NAME = 'static-v1';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';
const CACHE_INMUTABLE_NAME = 'inmutable-v1';
const CACHE_DYNAMIC_LIMIT = 50;


// las cosas hechas por mi 
const APP_SHELL_STATIC = [
    //'/',
    'index.html',
    'styles.29b83360a8554210302c.css',
    'favicon.ico',
    'runtime.ec2944dd8b20ec099bf3.js',
    'polyfills.1ef83d22ada557f4a131.js',
    'main.10d65f6a961bede60e8d.js'
];

// las cosas hechas por otros
const APP_SHELL_INMUTABLE = [

    'assets/css/aurora-pack.min.css',
    'assets/css/aurora-theme-base.min.css',
    'assets/css/urku.css',
    'assets/js/svg4everybody.min.js',
  
    
];

function limpiarCache(cacheName,numeroItemsQueQuedan ){

    caches.open(cacheName)

        .then( cache => {

            return cache.keys()
                .then(keys => {
                    console.log(keys);
                    if(keys.length > numeroItemsQueQuedan){

                        cache.delete(keys[0])
                            .then(limpiarCache(cacheName, numeroItemsQueQuedan))
                    }
                });
        });
}

self.addEventListener('install', e => {


    const cacheStatic = caches.open(CACHE_STATIC_NAME).then(cache => {
        return cache.addAll(APP_SHELL_STATIC);
    });


    const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME).then(cache => {
            return cache.addAll(APP_SHELL_INMUTABLE);
        });

    e.waitUntil(Promise.all([cacheStatic,cacheInmutable])); // espera que termine ambas promesas

});




// se dispara solo cuando la instalacion termina 
self.addEventListener('activate', e => {

    // borrar los cache staticos que sean diferente a la version actual 
    const respuesta = caches.keys().then(keys => {

            // barro  todos los keys
            keys.forEach( key => {

                    if( key !== CACHE_STATIC_NAME && key.includes('static')){ // borro solo los estaticos 
                        return caches.delete(key)
                    }
                    
                    if (  key !== CACHE_DYNAMIC_NAME && key.includes('dynamic') ) {
                        return caches.delete(key);
                    }
            });

    })
    e.waitUntil(respuesta);

})




/////////////////// 2 -  estrategia cache with network fallback ////////////////////////
// (intenta primero el cache , si no funciona intenta en la red)

self.addEventListener('fetch', e => {
    
    const respuesta = caches.match(e.request).then(res => {

        if( res ){
            return res; // si esta en el cache retorno el archivo 
        }

        // no existe el archivo que se esta requiriendo , tengo que ir a la web
        console.log('no existe ', e.request.url);

        return fetch(e.request).then( newResp => {

        // como no existe , lo grabo en el cache 

            caches.open(CACHE_DYNAMIC_NAME).then( cache => {
                cache.put(e.request, newResp);
                limpiarCache(CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT); // dejo 5 archivos
            });

            return newResp.clone(); 
        }).catch(err => {

            if( e.request.headers.get('accept').includes('text/html')) // detecta si lo que se solicita es una pag web 
            {
                // habria que crear la pag de 404 
                //return caches.match('/pages/offline.html')
            }
        });
                        
    });

    e.respondWith(respuesta);

});
