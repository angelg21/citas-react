//Simplificar la escritura de codigo 
//rfce para crear un nuevo componente con su estructura basica
//rafce hace lo miso perocon un arrow function

import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error'

//Los hooks se colocan en la parte superior de los componentes de react
//No se deben colocar dentro de codicionales o despues de un return

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  
  const [error, setError] = useState(false)
 
  //Este useEffect se va a ejecutar cuando paciente haya sufrido algun cambio
  //Para comprobar si un arreglo esta vacio o no se usa Object.keys(arreglo)
  //Object.keys devuelve un array cuyos elementos son strings correspondientes a
  //las propiedades enumerables que se encuentran directamente en el object.
  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  //Este useEffect se va a ejecutar cuando el componente este listo(haya cargado), (en este caso seria formulario)
  // useEffect (() => {
  //   console.log("El componente esta listo")
  // }, [])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return fecha+random
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()

    //Validacion del Formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true)
      return;
    }
    setError(false)
    //Objeto de Paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email,
      fecha,
      sintomas
    }

    if(paciente.id){
      //Editando el Registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacientesState => pacientesState.id === 
        paciente.id ? objetoPaciente : pacientesState)
      setPacientes(pacientesActualizados)
      setPaciente({})
    }else{
      //Nuevo Registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])      
    }

    //Reinicar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')


  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10' >
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      <form 
        className='bg-stone-300 shadow-md rounded-md py-10 px-5 mb-10 mx-5'
        onSubmit= {handleSubmit}   
      >      
      {error && <Error >'Todos los campos son obligatorios'</Error>}
        <div className='mb-5'>
          <label htmlFor='mascota'className='block text-gray-700 uppercase font-bold'>Nombre mascota</label>
          <input
            id='mascota'
            type="text"
            placeholder='Nombre de la mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value= {nombre}
            onChange= {(evt) => setNombre(evt.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='propietario'className='block text-gray-700 uppercase font-bold'>Nombre del Propietario</label>
          <input
          id='propietario'
            type="text"
            placeholder='Nombre del Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value= {propietario}
            onChange= {(evt) => setPropietario(evt.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='email'className='block text-gray-700 uppercase font-bold'>Email</label>
          <input
          id='email'
            type="text"
            placeholder='email'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value= {email}
            onChange= {(evt) => setEmail(evt.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='alta'className='block text-gray-700 uppercase font-bold'>Alta</label>
          <input
            id='mascota'
            type="date"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value= {fecha}
            onChange= {(evt) => setFecha(evt.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='alta'className='block text-gray-700 uppercase font-bold'>
            Sintomas 
          </label>
          <textarea
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Describe los sintomas'
            value= {sintomas}
            onChange= {(evt) => setSintomas(evt.target.value)}
          />
        </div>
        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all '  
          value= {paciente.id? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  )
}

export default Formulario

