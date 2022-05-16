const path = require ("path");
const express = require ("express");
const app = express ();

app.listen(3000, () => {
console.log ("El servidor esta prendido por si no sabias");
});

app.use (express.static(path.join(__dirname, "public")));
//esto se conoce como meadwear. Le dice a express que use todo los archivos que estan en esta carpeta, osea que los sirve como estan.
//esto entiendo que me da error en la pagina

app.get ("/", (req, res)=>{
    res.sendFile (path.join(__dirname, "views/babbage.html"));
});
//Aqui habia que modificar la ruta. Pongo la ruta tal cual esta en el path? Porque me da error en la pagina cuando lo hago asi



app.get ("views/berners-lee.html", (req, res)=>{
    res.sendFile (path.join(__dirname, "views/berners-lee.html"));
});

app.get ("views/clarke.html", (req, res)=>{
    res.sendFile (path.join(__dirname, "views/clarke.html"));
});

app.get ("views/hamilton.html", (req, res)=>{
    res.sendFile (path.join(__dirname, "views/hamilton.html"));
});

app.get ("views/hopper.html", (req, res)=>{
    res.sendFile (path.join(__dirname, "views/hopper.html"));
});

app.get ("views/index.html", (req, res)=>{
    res.sendFile (path.join(__dirname, "views/index.html"));
});

app.get ("views/lovelace.html", (req, res)=>{
    res.sendFile (path.join(__dirname, "views/lovelace.html"));
});

app.get ("views/turing.html", (req, res)=>{
    res.sendFile (path.join(__dirname, "views/turing.html"));
});