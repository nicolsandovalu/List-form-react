import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import List from './components/List';
import data from './data/data';
import Insert from './components/Insert';

function App() {

  const [Colaboradores, setColaboradores] = useState(data);
  const [search, setSearch] = useState('');

  const handleSearChange = (value) => {
    setSearch (value);
  }

  const handleAddColaborador = (colaborador) => {
    const updateColaborador = {
      ...colaborador,
      id: Colaboradores.length + 1
    }
    setColaboradores ([...Colaboradores, updateColaborador]);
  }

  return (
    <div className="container-fluid">
      <Nav onSearchChange={handleSearChange}/>

      <div className='container'>
      <Insert onSubmit = {handleAddColaborador}/>
        <List Colaboradores={Colaboradores} searchTerm={search}/>
      </div>
    </div>
  );
}

export default App;
