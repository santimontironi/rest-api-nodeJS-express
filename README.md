# CRUD de Productos con Express

### Este proyecto es una **REST API básica** creada con **Express.js**, que forma parte del temario de un curso de backend con Node.js y Express. Simula un CRUD (Crear, Leer, Actualizar y Eliminar) de productos utilizando rutas HTTP básicas.

## Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Morgan](https://www.npmjs.com/package/morgan) (middleware para logging de peticiones)

## Instalación

1. Clonar este repositorio: git clone https://github.com/santimontironi/rest-api-node
2. Instalar las dependencias: npm install
3.Iniciar el servidor: node index.js
Podés usar nodemon para desarrollo: npx nodemon index.js

## Endpoints disponibles

- GET	/products	Obtener todos los productos
- POST	/products	Crear un nuevo producto
- PUT	/products:id Editar un producto existente
- DELETE /products:id	Eliminar un producto
- GET	/products:id	Obtener un producto por ID 
