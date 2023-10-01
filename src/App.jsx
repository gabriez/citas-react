import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import ListadoPacientes from './components/ListadoPacientes'


function App() { 

  const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; 
  const [pacientes, setPacientes] = useState(pacientesLS);
  const [patient, setPatient] = useState({});

  useEffect(()=> {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const deletePatient = id => {  
    setPacientes((prevState) => {
      let notDeleted = prevState.filter((item) => item.id !== id );
      return [...notDeleted];
  });
  }

  return (
    <>
      <Header/>
      <div className='flex w-100 flex-wrap md:flex-nowrap justify-center'>
        <Form setPacientes={setPacientes} setPatient={setPatient} pacientes={pacientes} patient={patient} />
        <ListadoPacientes setPacientes={setPacientes} pacientes={pacientes} setPatient={setPatient} deletePatient={deletePatient} />
      </div>
    </>
  )
}

export default App
