const listado = document.querySelector<HTMLUListElement>("#lista");
const formulario = document.querySelector<HTMLFormElement>("#formulario");
const input = document.querySelector<HTMLInputElement>("#texto-tarea");

//TYPES
type Tarea = {
  titulo: string;
  completado: boolean;
  creadoEn: Date;
};

const listadoTareas: Tarea[] = cargarTareasLS();

listadoTareas.forEach(añadirTarea);

formulario?.addEventListener("submit", (e) => {
  handleSubmit(e);
});

function handleSubmit(e: Event) {
  e.preventDefault();

  if (input?.value == "" || input?.value == null) return;

  const nuevaTarea = {
    titulo: input?.value,
    completado: false,
    creadoEn: new Date(),
  };

  listadoTareas.push(nuevaTarea);

  guardarTareaLS();

  añadirTarea(nuevaTarea);

  input.value = "";
}

function añadirTarea(nuevaTarea: Tarea) {
  const itemLista = document.createElement("li");
  const tituloLista = document.createElement("span");
  const fechaLista = document.createElement("span");
  const checkbox = document.createElement("input");

  let fechaFormateada = formatearFecha(nuevaTarea.creadoEn);

  checkbox.type = "checkbox";
  checkbox.checked = nuevaTarea.completado;
  checkbox.addEventListener("change", () => {
    nuevaTarea.completado = checkbox.checked;
    guardarTareaLS();
  });

  tituloLista.append(nuevaTarea.titulo);
  fechaLista.append(fechaFormateada);
  itemLista.append(checkbox, tituloLista, fechaLista);
  listado?.append(itemLista);
}

function guardarTareaLS() {
  localStorage.setItem("tareas", JSON.stringify(listadoTareas));
}

function cargarTareasLS(): Tarea[] {
  const tareasLS = localStorage.getItem("tareas");
  if (tareasLS == null) return [];

  return JSON.parse(tareasLS);
}

//FORMATEAR FECHA CON JAVASCRIPT INTERNATIONALIZATION API
function formatearFecha(fecha: Date): string {
  let newFecha = new Date(fecha);
  let obtenerFecha = new Intl.DateTimeFormat("es-AR", {
    month: "long",
    day: "numeric",
  }).format;

  let fechaFormateada = obtenerFecha(newFecha);

  return fechaFormateada;
}
