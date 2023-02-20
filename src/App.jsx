//JSX: JavaScript Syntax Extension 
//Es una extension del lenguaje desarrollada por facebook para React

//Parece JS pero muestra codigo HTML, y basicamente es un 
//lenguaje de Template que muestra el HTML pero tiene todas las funciones de JavaScript

//Una vez compilado son archivos JS confunciones y objetos

//Reglas en JSX

//A diferencia de HTML, que no es estricto, en JSX si un elemento HTML
//tiene una etiqueta de apertura, deberas tener tambien la de cierre

//Las etiquetas de solo apertura como <link> <img> o <input> deberan finalizar con />
//Cada componente debe tener un return
//En este return debe haber maximo un solo elemento en el nivel maximo 

//Un error seria retornar algo asi porque estaria retornando un h1 y un p
//y solo se puede retornar un elemento en la parte superior (o mas exterio)

// function App() {
  
//   return (
//      <h1></h1>
//     <p>Un parrafo</p>
//   )
//}

//Para no colocar tantos divs, se puede usar lo que se conoce en javascript como un fragment
// que cumpliria la misma funcion del div solo que se escribiria asi <> </>

//En los componentes existen dos partes, todo el codigo javascript que puedes colocar antes
// del return donde puedes declarar y llamar multiples funciones, validaciones, , if, ect y la  parte despues del
//return donde va tambien el codigo html y no puedes usar if y otras herramientas, el codigo html que coloques tiene que estar entre llaves 
import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario
          pacientes = {pacientes}
          setPacientes = {setPacientes}          
        />
        <ListadoPacientes 
          pacientes = {pacientes}
          setPaciente = {setPaciente}
        />
      </div>      
    </div>
  )
}

export default App
