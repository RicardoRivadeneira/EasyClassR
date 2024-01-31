// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Curso from './components/Curso';
import CursoDetalle from './components/CursoDetalle';
import CursoForm from './components/CursoForm';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root');

const App = () => {
    const [cursos, setCursos] = useState([]);
    const [cursoActual, setCursoActual] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/api/cursos')
            .then(response => {
                setCursos(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    const handleCursoClick = (curso) => {
        setCursoActual(curso);
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleFormSubmit = (formData) => {
        axios.post('http://localhost:3001/api/cursos', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            setCursos(response.data);
            closeModal();
        })
        .catch(error => {
            console.error('Error adding course: ', error);
        });
    };

    return (
        <div className="app">
            <h1 className="titulo-principal">Cursos Disponibles</h1>
            <p className="descripcion-cursos"><b>Cursos orientados a la programación</b></p>
            <div className="lista-cursos">
                {cursos.map((curso) => (
                    <Curso key={curso.id} curso={curso} onClick={handleCursoClick} />
                ))}
            </div>
            {cursoActual && <CursoDetalle curso={cursoActual} />}
            <button onClick={openModal} className="boton-agregar">Agregar Curso</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Agregar Curso"
                className="Modal"
                overlayClassName="Overlay"
            >
                <CursoForm onSubmit={handleFormSubmit} />
            </Modal>
        </div>
    );
};

export default App;
