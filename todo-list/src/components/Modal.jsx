function Modal({
  visibilidad,
  setIsVisible,
  valueEdit,
  setValueEdit,
  setListado,
  listado,
}) {
  const handleChangeEdit = (e) => {
    setValueEdit({ ...valueEdit, nombre: e.target.value });
  };

  const handleGuardarEdit = (e) => {
    e.preventDefault();
    const newListado = listado.map((item) => {
      if (item.id === valueEdit.id) {
        return { ...item, nombre: valueEdit.nombre };
      }
      return item;
    });

    setListado(newListado);
  };

  return (
    <div className={`modal ${visibilidad}`}>
      <form
        onSubmit={(event) => {
          handleGuardarEdit(event);
          setIsVisible((prevState) => !prevState);
        }}
      >
        <h2>editando {valueEdit.nombre}</h2>
        <input
          type="text"
          value={valueEdit.nombre}
          onChange={handleChangeEdit}
        />
        <button>guardar</button>
      </form>
    </div>
  );
}

export default Modal;
