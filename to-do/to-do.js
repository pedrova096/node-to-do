const fs = require('fs');
let ListaTareas = [];
const guardarDB = () => {
    let data = JSON.stringify(ListaTareas);
    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo guardar el archivo', err);
    });
}
const cargarDB = () => {
    try {
        ListaTareas = require('../db/data.json');
    } catch (error) {
        ListaTareas = [];
    }
}
const crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion,
        completado: false
    }
    ListaTareas.push(tarea);
    guardarDB();
    return tarea;
}
const getListado = () => {
    cargarDB();
    return ListaTareas;
}
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let indx = ListaTareas.findIndex(f => f.descripcion == descripcion);
    if (indx < 0) {
        return false;
    } else {
        ListaTareas[indx].completado = completado;
        guardarDB();
        return true;
    }
}
const porBorrar = (descripcion) => {
    cargarDB();
    let indx = ListaTareas.findIndex(f => f.descripcion == descripcion);
    let Nlista = ListaTareas.filter(f => f.descripcion != descripcion);
    if (indx < 0) {
        return false;
    } else {
        ListaTareas.splice(indx, 1);
        guardarDB();
        return true;
    }
}
module.exports = {
    crear,
    getListado,
    actualizar,
    porBorrar
};