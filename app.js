const argv = require('./config/yargs').argv;
const todo = require('./todo/todo');
const colors = require('colors');



let comando = argv._[0];
switch(comando) {
    case 'crear':
        let tarea = todo.crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'listar':
       let lista = todo.getListado();
        for(let tarea of lista) {
            console.log('============TODO================'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=================================='.green);
        }
    break;

    case 'actualizar':
        if(todo.actualizar(argv.descripcion, argv.completado)) {
            console.log('Tarea actualizada correctamente!'.inverse.green);
        }else {
            console.log(`La tarea ${argv.descripcion} no se pudo actualizar`.inverse.red);
        }
    break;

    case 'borrar': 
        let borrado = todo.borrar(argv.descripcion);
        if(borrado) {
            console.log(`${argv.descripcion} borrada correctamente`.inverse.yellow);
        }else {
            console.log(`Error al intentar borrar la tarea '${argv.descripcion}'`.inverse.red);
        }
    break;

    default:
    console.log('Comando no reconocido');
}