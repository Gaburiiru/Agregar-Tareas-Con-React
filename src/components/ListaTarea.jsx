import TareaCard from './TareaCard'
import {useContext} from 'react'
import {TareaContext} from '../context/tareaContext'

function ListaTarea() {
  const {tareas} = useContext(TareaContext)

  if (tareas.length === 0) {
    return <h1 className='text-white text-3xl font-bold text-center'>No hay tareas aún...</h1>;
  }

  return (
    <div className='grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2'>
      {tareas.map((tarea) => (
        <TareaCard key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
}
export default ListaTarea;
