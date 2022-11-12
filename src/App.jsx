import {useState, useEffect} from 'react'
import Header from "./components/Headers"
import ListPatients from "./components/ListPatients"
import FormPatient from "./components/FormPatient"



function App() {
  const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(INITIAL)
  const [paciente, setPaciente] = useState({})
  


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id  !== id)
    setPacientes(pacientesActualizados)
}
  
  return (
    <div className="container mx-auto mt-20">
      <Header />
    <div className='mt-12 md:flex'>  
      <FormPatient 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
      <ListPatients 
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminarPaciente={eliminarPaciente}
     
      />
    </div>
 
    </div>
  )
}

export default App
