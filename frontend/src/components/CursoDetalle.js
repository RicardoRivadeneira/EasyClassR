// src/components/CursoDetalle.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CursoDetalle = () => {
    const [curso, setCurso] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/api/cursos/${id}`)
            .then(response => {
                setCurso(response.data);
            })
            .catch(error => {
                console.error('Error fetching course details: ', error);
            });
    }, [id]);

    if (!curso) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="curso-detalle">
            <h1>{curso.nombre}</h1>
            <img src={`http://localhost:3001/${curso.imagen}`} alt={curso.nombre} style={{ maxWidth: '400px', maxHeight: '400px' }} />
            <p>{curso.descripcion}</p>
            {/* Agrega más detalles del curso según sea necesario */}
        </div>
    );
};

export default CursoDetalle;
