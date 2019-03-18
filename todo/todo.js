const fs = require('fs');
const colors = require('colors');
let listaTodo = [];


const guardarDB = () => {
    
    let datos = JSON.stringify(listaTodo);
    fs.writeFile('database/data.json', datos, (err) => {
        if(err) throw new Error('No se pudo guardar la tarea', err);
    });
    
}

const getListado = () => {
    cargarDB();
    return listaTodo;
}

const cargarDB = () => {
    try{
        listaTodo = require('../database/data.json');
    }catch(error) {
        listaTodo = [];
    }
    
    
}
const crear = (descripcion) => {
    cargarDB();
    let todo = {
        descripcion, 
        completado: false
    };

    listaTodo.push(todo);
    guardarDB();

    return todo;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let indice = listaTodo.findIndex(tarea => tarea.descripcion === descripcion);
    if(indice >= 0){
        listaTodo[indice].completado = completado;
        guardarDB();
        return listaTodo[indice];
    }
        
    else    
        return null;
}

const borrar = (descripcion) => {
    cargarDB();
    let indice = listaTodo.findIndex(tarea => tarea.descripcion === descripcion);
    if(indice >= 0){
        let tarea = listaTodo[indice];
        listaTodo.splice(indice, 1);
        guardarDB();
        return tarea;
    }
    
    return null;

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}


