//const fs = require ("fs");


//const tasksJsonData = fs.readFileSync("./tasks.json", "utf-8");
//console.log (tasksJsonData);


const tasks = JSON.parse (tasksJsonData);
console.log (tasks);

const funciones = require("./tasks");

const { listar, leerTareasJSON } = funciones;

const action = process.argv[2];
// Tenemos una variable que se llama 'action'
// Y puede venir con el valor 'listar', vacia (undefined), o
// con cualquier otro valor
// Si viene con el valor 'listar'
// Listar las tareas (como hicimos arriba)
// Si viene vacia
// Imprimir "Atención - Tienes que pasar una acción."
// Si viene con cualquier otro valor
// Imprimir: "No entiendo qué quieres hacer."
switch (action) {
  case "listar":
    const tasks = leerTareasJSON();
    listar(tasks);
    break;
  case undefined:
    console.log("Atención - Tienes que pasar una acción.");
    break;
  default:
    console.log("No entiendo qué quieres hacer.");
}