"use strict";
const listado = document.querySelector("#lista");
const formulario = document.querySelector("#formulario");
const input = document.querySelector("#texto-tarea");
const listadoTareas = cargarTareasLS();
listadoTareas.forEach(añadirTarea);
formulario === null || formulario === void 0 ? void 0 : formulario.addEventListener("submit", (e) => {
    handleSubmit(e);
});
function handleSubmit(e) {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null)
        return;
    const nuevaTarea = {
        titulo: input === null || input === void 0 ? void 0 : input.value,
        completado: false,
        creadoEn: new Date(),
    };
    listadoTareas.push(nuevaTarea);
    guardarTareaLS();
    añadirTarea(nuevaTarea);
    input.value = "";
}
function añadirTarea(nuevaTarea) {
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
    listado === null || listado === void 0 ? void 0 : listado.append(itemLista);
}
function guardarTareaLS() {
    localStorage.setItem("tareas", JSON.stringify(listadoTareas));
}
function cargarTareasLS() {
    const tareasLS = localStorage.getItem("tareas");
    if (tareasLS == null)
        return [];
    return JSON.parse(tareasLS);
}
//FORMATEAR FECHA CON JAVASCRIPT INTERNATIONALIZATION API
function formatearFecha(fecha) {
    let newFecha = new Date(fecha);
    let obtenerFecha = new Intl.DateTimeFormat("es-AR", {
        month: "long",
        day: "numeric",
    }).format;
    let fechaFormateada = obtenerFecha(newFecha);
    return fechaFormateada;
}
