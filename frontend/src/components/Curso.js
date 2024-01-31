import React from 'react';

const Curso = ({ curso, onClick }) => {
    const { nombre, descripcion, imagen } = curso;
    // Asegúrate de que la URL de la imagen apunte a la ubicación correcta en tu servidor
    const imageUrl = imagen ? `http://localhost:3001/${imagen}` : 'default-image.jpg'; // Reemplaza 'default-image.jpg' con una imagen predeterminada si lo deseas

    return (
        <div className="curso" onClick={() => onClick(curso)}>
            <img src={imageUrl} alt={nombre} style={{ maxWidth: '200px', maxHeight: '200px' }} />
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
        </div>
    );
};

export default Curso;
