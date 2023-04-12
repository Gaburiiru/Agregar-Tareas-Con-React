import {useContext} from 'react'
import {TareaContext} from '../context/tareaContext'

function TareaCard({ tarea }) {
  
  const {eliminarTarea} = useContext(TareaContext)

  return (
      <div className='bg-gray-800 text-white p-4 rounded-md shadow-2xl'>
        <h1 className='text-xl font-bold capitalize'>{tarea.titulo}</h1>
        <p className='text-gray-400 text-sm'>{tarea.descripcion}</p>
        <button className='bg-red-500 py-1 px-2 rounded-md mt-4 hover:bg-red-700' onClick={() => eliminarTarea(tarea.id)}>Eliminar tarea</button>
      </div>
  );
}

export default TareaCard;