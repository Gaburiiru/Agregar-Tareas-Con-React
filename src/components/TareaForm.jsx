import { useState, useContext } from "react";
import { TareaContext } from "../context/tareaContext";

function TareaForm() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { crearTarea } = useContext(TareaContext);

  const manejoSubmit = (e) => {
    e.preventDefault();
    crearTarea({
      titulo,
      descripcion,
    });
    setTitulo("");
    setDescripcion("");
  };

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={manejoSubmit} className="bg-gray-800 p-10 mb-4 rounded-md shadow-2xl text-center">
      <h1 className="font-bold text-4xl m-3 text-white">Agregar Tareas Con React</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
          className="bg-slate-300 p-3 w-full rounded-md mb-2"
          autoFocus
          required
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
          className="bg-slate-300 p-3 w-full rounded-md mb-2"
          required
        />
        <button className="bg-green-500 px-6 py-1 text-white rounded-md hover:bg-green-700">Guardar</button>
      </form>
    </div>
  );
}

export default TareaForm;
