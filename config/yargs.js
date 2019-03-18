const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const argv = require('yargs')
            .command('crear', 'Crear un todo', {
                descripcion
            
               
            })
            .command('actualizar', 'Actualiza un todo', {
                descripcion,
                completado: {
                    default: true,
                    alias: 'c',
                    desc: 'Marca un todo como completado o pendiente una tarea'
                }
            })
            .command('borrar', 'Borra un todo', {
                descripcion
            })
            .help()
            .argv;

            module.exports = {
                argv
            }