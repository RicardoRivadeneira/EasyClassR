# Proyecto de Cursos en Línea

Este proyecto es una aplicación web que permite a los usuarios visualizar, agregar y editar una lista de cursos en línea. La aplicación está dividida en un backend y un frontend.

## Características

- Visualización de una lista de cursos.
- Detalle de cada curso.
- Posibilidad de agregar y editar cursos.
- Diseño responsivo.

## Estructura del Proyecto

El proyecto está organizado en dos directorios principales: `backend` y `frontend`.
``` markdown
EasyClass/
├── backend/
│   ├── node_modules/
│   ├── database/
│   │   ├── cursos.js
│   │   └── cursos.json
│   ├── routes/
│   │   └── cursos.js
│   ├── uploads/
│   ├── app.js
│   └── package.json
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Curso.css
│   │   │   ├── Curso.js
│   │   │   ├── CursoDetalle.js
│   │   │   ├── CursoForm.css
│   │   │   ├── CursoForm.js
│   │   │   ├── CursoFormContainer.js
│   │   │   ├── ListaCursos.js
│   │   │   ├── Modal.css
│   │   │   ├── Modal.js
│   │   │   └── Navbar.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

## Dependencias de Proyecto

Este documento detalla las dependencias usadas en el proyecto, incluyendo tanto el backend como el frontend, junto con los comandos para instalarlas.

## Backend (Node.js)

### Dependencias:
- `express`: Framework para crear aplicaciones web y APIs.
- `cors`: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- `body-parser`: Middleware para analizar cuerpos de solicitud entrantes.
- `multer`: Middleware para manejar la carga de archivos.

### Comando de Instalación
Para instalar todas estas dependencias en tu backend, navega a la carpeta del backend y ejecuta:

```bash
npm install express cors body-parser multer
```
## Frontend (React)

### Dependencias
Estas son las dependencias necesarias para el frontend del proyecto, desarrollado con React:

- `react`: Biblioteca de JavaScript para construir interfaces de usuario.
- `react-dom`: Proporciona métodos específicos del DOM para React.
- `axios`: Cliente HTTP basado en promesas para hacer solicitudes HTTP.
- `react-modal`: Componente React para implementar modales accesibles.
- `react-router-dom`: Biblioteca para manejar el enrutamiento en React.
- `@testing-library/react`: Herramientas para pruebas en aplicaciones React.
- `@testing-library/jest-dom`: Extiende Jest para trabajar con elementos del DOM.
- `@testing-library/user-event`: Biblioteca para simular eventos de usuario.
- `react-scripts`: Scripts y configuración utilizados por Create React App.
- `web-vitals`: Biblioteca para medir métricas de calidad de usuario en la web.

### Comando de Instalación
Para instalar todas estas dependencias en tu frontend, navega a la carpeta del frontend y ejecuta el siguiente comando:

```bash
npm install react react-dom axios react-modal react-router-dom @testing-library/react @testing-library/jest-dom @testing-library/user-event react-scripts web-vitals
```
### Dependencias de Desarrollo

El proyecto incluye la siguiente dependencia de desarrollo:

- `@babel/plugin-proposal-private-property-in-object`: Plugin de Babel para la sintaxis de propiedades privadas en objetos.

### Comando de Instalación
Para instalar esta dependencia de desarrollo, utiliza el siguiente comando:

```bash
npm install --save-dev @babel/plugin-proposal-private-property-in-object
```
## Comando para el funcionamiento
cd backend
npm install

cd backend
npm install

## En el backend
node server.js

## En el Frontend
npm start
