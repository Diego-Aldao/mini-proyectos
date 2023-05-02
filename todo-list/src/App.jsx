import { useState } from "react";
import "./App.css";
import Listado from "./components/Listado";
import Modal from "./components/Modal";

function App() {
  const [value, setValue] = useState("");
  const [listado, setListado] = useState([]);
  const [valueEdit, setValueEdit] = useState("");
  const [indexItem, setIndexItem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setListado([
      ...listado,
      {
        id: indexItem + 1,
        nombre: value,
      },
    ]);
    setIndexItem((prevItem) => prevItem + 1);
    setValue("");
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const visibilidad = isVisible ? "" : "oculto";

  return (
    <main>
      <section>
        <h1>todo list</h1>
        <form className="agregar-form" onSubmit={handleSubmit}>
          <h2>agregar item</h2>
          <div>
            <input onChange={handleChange} type="text" value={value} />
            <button>agregar</button>
          </div>
        </form>
      </section>
      <Listado
        listado={listado}
        setIsVisible={setIsVisible}
        setValueEdit={setValueEdit}
        setListado={setListado}
        setIndexItem={setIndexItem}
      />
      <Modal
        valueEdit={valueEdit}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setValueEdit={setValueEdit}
        setListado={setListado}
        visibilidad={visibilidad}
        listado={listado}
      />
    </main>
  );
}

export default App;
