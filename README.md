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


## Comando para el funcionamiento
cd backend
npm install

cd backend
npm install

## En el backend
node server.js

## En el Frontend
npm start
