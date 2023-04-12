import {createContext, useState, useEffect} from 'react'
import { tareas as dato } from "../data/Tarea";

export const TareaContext = createContext()

export function TareaContextProvider(props) {

  const [tareas, setTarea] = useState([]);
    function crearTarea(tarea) {
    setTarea([
      ...tareas,
      {
        titulo: tarea.titulo,
        id: tareas.length,
        descripcion: tarea.descripcion,
      },
    ]);
  }

  function eliminarTarea(tareaId) {
    setTarea(tareas.filter((tarea) => tarea.id !== tareaId))
  }

  useEffect(() => {
    setTarea(dato);
  }, []);

  return (
    <TareaContext.Provider value={{
      tareas,
      crearTarea,
      eliminarTarea
    }}>
      {props.children}
    </TareaContext.Provider>
  )
}