const autos=require('./autos');

const concesionaria = {
    autos: autos,
    buscarAuto: function  (patente){
    const autoBuscado = this.autos.find (auto => auto.patente== patente);
   if (autoBuscado == undefined){
       return null;
   } 
   return autoBuscado;
    }
    }
    console.log (concesionaria.buscarAuto("JJK 116"));

    function venderAuto (patente){
     const autoBuscado = this.buscarAuto (patente);
     if (autoBuscado){
       autoBuscado.vendido = true;
     }
 }
 console.log (venderAuto ("AL 123"));