import React, { useState } from 'react';
import Formulario from './components/Formulario';
import ListaEstudiantes from './components/ListaEstudiante';
import Estudiante from './components/Estudiante';
import Error from './components/Error';

const App = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudiante, setEstudiante] = useState({});

  // Función para borrar un estudiante por ID
  const borrarEstudiante = (id) => {
    const nuevosEstudiantes = estudiantes.filter((est) => est.id !== id);
    setEstudiantes(nuevosEstudiantes);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Formulario para agregar/editar estudiantes */}
        <Formulario
          setEstudiantes={setEstudiantes}
          estudiantes={estudiantes}
          estudiante={estudiante}
          setEstudiante={setEstudiante}
        />
        {/* Lista de estudiantes */}
        <ListaEstudiantes
          estudiantes={estudiantes}
          borrar={borrarEstudiante}
          setEstudiante={setEstudiante}
        />
      </div>
    </div>
  );
};

export default App;