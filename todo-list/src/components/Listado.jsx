const Listado = ({
  listado,
  setIsVisible,
  setValueEdit,
  setListado,
  setIndexItem,
}) => {
  const handleEditar = (item) => {
    setValueEdit(item);
  };

  const handleBorrar = (item) => {
    const newListado = listado.filter((value) => value.id !== item.id);
    console.log(listado);
    setListado(newListado);
    setIndexItem((prevItem) => prevItem - 1);
  };
  return (
    <section>
      {listado?.map((item) => {
        return (
          <div className="item" key={item.id}>
            <p>{item.nombre}</p>
            <div className="botones">
              <button
                onClick={() => {
                  handleEditar(item);
                  setIsVisible((prevState) => !prevState);
                }}
              >
                editar
              </button>
              <button
                onClick={() => {
                  handleBorrar(item);
                }}
              >
                borrar
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Listado;
