

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  
 

  const {nombre, propietario, email, fecha,sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Eliminar este paciente')

    if (respuesta){
      eliminarPaciente(id)
    }
  
  }

  return (
            <div className="m-3 bg-white shadow-md px-5 py-8 rounded-xl">
                 
                    
                      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                        <span className="font-normal normal-case">{nombre}</span>
                      </p>
                      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                        <span className="font-normal normal-case">{propietario}</span>
                      </p>
                      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                        <span className="font-normal normal-case">{email}</span>
                      </p>
                      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: {''}
                        <span className="font-normal normal-case">{fecha}</span>
                      </p>
                      <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                        <span className="font-normal normal-case">{sintomas}</span>
                      </p>

                      <div className="flex justify-between mt-10">
                        <button onClick={ () => setPaciente(paciente)} 
                        className="bg-indigo-600 hover:bg-indigo-800 py-2 px-10 rounded-md font-bold text-white" type="button">
                        Editar
                        </button>

                        <button type='button' onClick={handleEliminar} className="bg-red-600 hover:bg-indigo-800 py-2 px-10 rounded-md font-bold text-white">
                        Eliminar  
                        </button>
                      </div>
            </div>
  )
}

export default Paciente