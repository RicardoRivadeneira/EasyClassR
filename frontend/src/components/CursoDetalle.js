import React from 'react';

const CursoDetalle = ({ curso }) => {
    if (!curso) return <div>Seleccione un curso para ver los detalles.</div>;

    return (
        <div>
            <h3>{curso.nombre}</h3>
            <p>{curso.descripcion}</p>
        </div>
    );
};

export default CursoDetalle;
