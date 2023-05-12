# storydots_challenge

## Tecnologias
### Front-end:
- React
- Redux
- Typescript
- SWR
### Back-end:
- Node
- Express
- Nest
- Typescript
- Postgresql
- Typeorm
- Docker
---
## Lista de dependencias
### Front-end:
### _Dependencias necesarias_
```
npm i axios react-router-dom react-redux @reduxjs/toolkit js-cookie jsonwebtoken jwt-decode jwt-simple react-cookie react-icons swr
```
### _Dependencias de desarrollo necesarias_
```
npm i @types/js-cookie @types/jsonwebtoken tailwindcss
```
### Back-end:
### _Dependencias necesarias_
```
npm i bcrypt class-transformer class-validator morgan @nestjs/typeorm typeorm pg typeorm-naming-strategies jsonwebtoken
```
---
## Todas las rutas
Autentificaion
- POST - /api/auth/login --> Autentificacion de usuario

Users
- GET - /api/user/all --> Extraer todos los usuarios
- GET - /api/user/:id --> Extraer un usuario
- POST - /api/user/register --> Creacion de usuario
- PUT - /api/user/edit/:id --> Edicion de usuario
- DELETE - /api/user/delete/:id --> Eliminacion de usuario

Productos
- GET - /api/product/all --> Extraer todos los productos
- GET - /api/product/:id --> Extraer un producto
- GET - /api/product/?name= --> Extraer un producto por nombre
- POST - /api/product/create-product --> Creacion de producto
- PUT - /api/product/edit/:id --> Edicion de producto
- DELETE - /api/product/delete/:id --> Eliminacion de producto

Marca
- GET - /api/brand/all --> Extraer todas las marcas
- GET - /api/brand/:id --> Extraer una marca
- POST - /api/brand/create-brand --> Creacion una marca
- POST - /api/brand/edit/:id --> Edicion una marca
- POST - /api/brand/delete/:id --> Eliminacion una marca
---
## Descripcion
### Back-end
El back-end cuenta con las rutas mencionadas anteriormente, las cuales fueron creadas por medio de tablas y servicios utilizando **typeorm**.
Cuenta con autentificion utilizando **jsonwebtoken**, el cual enviara un token en el que por dentro contiene los datos del usuario autenticado.

Utilizo **docker** para mi base de datos con **postgresql**

### Front-end
En el front-end tenemos distintas paginas, en donde la principal sera la de productos, donde encontraremos toda la lista de productos, un input en el cual podremos buscar productos por su nombre (no por su marca), y cuenta con un boton para agregar productos a al listado.
Podremos entrar al detalle del producto para ver mas informacion, y debajo de todo, encontraras los botones de editado y borrado del producto.

Cuenta tambien con un login, en donde tendremos que loguearnos para asi poder utilizar funcionalidades como agregar producto, editar poroducto y borrar producto. En caso de no estar logueado, solamente podra acceder a las funcionalidaes GET de la aplicacion (traer informacion, no modificarla).

Cabe recalcar que para realizar el CRUD, utilize la libreria **SWR** con la cual se facilitan mucho las llamadas a la api y la extraccion de su informacion.
Tanto en las llamadas a la api como con cada renderizado de cada pagina de la web, se utiliza *Suspense* y *lazy*, para asi no consumir espacio en memoria de manera innecesaria.
Vale tambien mencionar, que las rutas son protegidas en caso de no estar logueado.

---
## Faltantes:
- Paginado/scroll infinito
- Registro

---
## Aclaraciones

- Si desea hacer login, la contraseña es 'didier' y el username es 'didi' o 'didier@gmail.com'
- Para poder levantar la base d datos con docker, recomiendo ubicarse dentro de la carpeta 'api' en terminal y pegar el siguiente codigo para el fun
```
docker compose up -d
```
- Para levantar el servidor
```
npm run start:dev
```

- Para levantar la web
```
npm run dev
```

