import {useState, useEffect} from 'react'
import Error from './Error';

const FormPatient = ({pacientes,setPacientes, paciente, setPaciente}) =>{

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    useEffect( () => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            
        }
    }, [paciente])

    const generarId= () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        
        return random+fecha
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
 
        if([nombre, propietario, email, fecha, sintomas,].includes('')){
            setError(true)
            return
        }

        setError(false)

        const objetoPaciente = {
            nombre, propietario, email, fecha, sintomas, 
        }
        
        if (paciente.id){
        
        objetoPaciente.id = paciente.id
        const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === 
        paciente.id ? objetoPaciente : pacienteState)
        setPacientes(pacientesActualizados)
        setPaciente({})

        }else{
            objetoPaciente.id =  generarId();
            setPacientes([...pacientes, objetoPaciente])
        }
            
          setNombre('');
          setPropietario('');
          setEmail('');
          setFecha('');
          setSintomas('');
        
    }

    return(
        <>
            <div className='mdd: w-1/2 lg:w-2/5'>
                    <h2 className='font-black text-3-l text-center'>Seguimientos pacientes</h2>

                    <p className= 'text-lg mt-5 text-center mb-10'>
                        Añade pacientes y {''} 
                        <span className='text-indigo-400 font-bold'>Administralos</span>
                    </p>

                    <form  onSubmit={ handleSubmit } 
                        className='bg-white shadow-md rounded-md py-10 px-5'>
                        
                        {error && <Error>Todos los campos son necesarios </Error>}    

                        <div>
                            <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascotas</label>
                            <input id='mascota' value={nombre} onChange={ (e) => setNombre(e.target.value)} 
                                type='text' placeholder='Nombre Mascotas' 
                                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm' />
                        </div>
                        <div className="mt-2">
                            <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre propietario</label>
                            <input id='propietario' value={propietario} onChange={ (e) => setPropietario(e.target.value)}   type='text'
                             placeholder='Nombre propietario' 
                             className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm' />
                        </div>
                        <div className="mt-2">
                            <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>email</label>
                            <input id='email' type='email' value={email} onChange={ (e) => setEmail(e.target.value)} 
                            placeholder='email' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm' />
                        </div>
                        <div className="mt-2">
                            <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>fecha de alta</label>
                            <input id='alta' type='date' value={fecha} onChange={ (e) => setFecha(e.target.value)} 
                            placeholder='fecha de alta' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm' />
                        </div>
                        <div className="mt-2">
                            <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>sintomas</label>
                           <textarea id='sintomas' value={sintomas} onChange={ (e) => setSintomas(e.target.value)}  
                           placeholder='Describe los sintomas' className='border-2 w-full p-2 mt-2'>

                           </textarea>
                        </div>

                        <input  type='submit'  value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                         className='mt-2 text-white bg-indigo-500 w-full p-3 uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
                         />
                        

                    </form>
            </div>
        </>
    )

}

export default FormPatient