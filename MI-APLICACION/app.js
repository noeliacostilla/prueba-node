//const textoEnFormatoJson = `["banana","manzana"]`;
//const arrayFrutas = JSON.parse (textoEnFormatoJson);
//console.log ("Primer elemento en formato JSON: " , textoEnFormatoJson [0]);
//console.log ("Primer elemento en array: " , arrayFrutas[0]);
//const variable JSON.parse ();
//const misTareas = require ("./tasks.json");
//console.log (misTareas);

const fs = require ("fs");


//Sirve para interactuar con el sistema de archivos


//Leer el texto que esta adentro del archivo
// con fs.readFileSync ("./ task.json", "utf-8");
// y guardarlo en una variable que llamaremos 'taskJsonData'

 const taskJsonData = fs.readFileSync ("./tasks.json", "utf-8");


 //parsear este texto a java
//y guardo en una variable task

const tasks = JSON.parse (taskJsonData);

//console.log (tasks);

//quiero imprimir el nombre de la tarea
// por ejemplo: estudar - pendiente
//Hacer la cena - en curso

//const primerElemento = tasks[1];
//console.log (primerElemento.state);

//ahora necesito recorrer el array y por cada elemenos imprimir en titulo y el estado. Para eso uso for

//for (let i=0; i<tasks.length; i++){
//const task = tasks[i];
//console.log ("[" + task.title+ "]"  + " - " + task.state);

//};

//Micro Desafio 2
//tenemos una variable que se llama action 
// y puede venir con el valor listar, vacia o cualquier otro
// Si viene con el valor listar, hay que listar las tareas
//Si viene vacia imprimo "Atencion, debe pasar una accion"
//Si viene con otro valor debe imprimir "No entiendo que queres hacer"

const action = process.argv [2];

switch (action){
    case "listar": 
    for (let i=0; i<tasks.length; i++){
        const task = tasks[i];
        console.log ("[" + task.title+ "]"  + " - " + task.state);
        };
        break;
    case undefined:
        console.log ("Atencion, debe pasar una accion");
        break;
    default:
        console.log ("No entiendo que queres hacer");
        break;
       
    
};

//console.log (process.argv[2]);





