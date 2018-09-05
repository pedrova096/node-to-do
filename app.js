const argv = require('./config/yargs').argv;
const color = require('colors');
const tareas = require('./to-do/to-do');
console.log(argv);
let accion = argv._[0];
switch (accion) {
    case 'crear':
        let tarea = tareas.crear(argv.tarea);
        console.log(tarea);
        break;
    case 'actualizar':
        if (tareas.actualizar(argv.tarea, argv.completado)) {
            console.log('Registo actualizado'.green);
        } else {
            console.log('Falló actualizando'.red);
        }
        break;
    case 'listar':
        let listado = tareas.getListado();
        for (let tarea of listado) {
            console.log('====== Por hacer ======'.green);
            console.log(color.yellow(tarea.descripcion));
            console.log(color.yellow(`Estado: ${tarea.completado}`));
            console.log('========================'.green);
        }
        break;
    case 'borrar':
        let borrado = tareas.porBorrar(argv.tarea);
        console.log(`Borrado: ${borrado} : ${argv.tarea}`);
        break;
    default:
        console.log('Comando no reconocido.'.red);
        break;
}