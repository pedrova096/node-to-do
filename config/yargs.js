const tarea = {
    demand: true,
    alias: 't',
    desc: 'Contexto de la tarea'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca el estado de la tarea'
}
const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea por hacer', {
        tarea
    })
    .command('listar', 'Lista las actividades')
    .command('actualizar', 'Actualiza el estado completado de un tarea', {
        tarea,
        completado
    })
    .command('borrar', 'Borra una tarea por su descripcion', {
        tarea
    })
    .help()
    .argv;
module.exports = {
    argv
}