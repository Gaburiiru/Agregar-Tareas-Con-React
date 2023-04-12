import ListaTarea from "./components/ListaTarea";
import TareaForm from "./components/TareaForm";

function App() {
  return (
    <main>
      <div className="container mx-auto p-10">
        <TareaForm />
        <ListaTarea />
      </div>
    </main>
  );
}

export default App;
