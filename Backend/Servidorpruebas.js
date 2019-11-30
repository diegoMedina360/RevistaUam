const App=require('./Configuraciones');
const vehiculos=require("./Modelos/vehiculos");

var datos=[{placa:"nhr8989",marca:"mazda"},{placa:"jjj987",marca:"twingo"}];

App.post('/vehiculos',function(req,res,next) {

    const objdocumento=new vehiculos(req.body);
    objdocumento.save();
    datos.push({placa:""+req.body.placa,marca:""+req.body.marca});
    //console.log("La placa que llego es: "+req.body.placa+" la marca es: "+req.body.marca);
    res.json(datos);
    
});

App.get('/listarvehiculos/placa', async(req,res,next)=> { 
    const listav= await vehiculos.find();
    res.json(listav);  
});
App.get('/listarvehiculos/placa/:placa',function(req,res,next){
    //var resultado='Hola a todos, Bienvenidos a programacion 3 configuraciones';
    //res.json(resultado);
    var mensaje="No se encontro la placa!!";

    for(var llave in datos){
        if(datos[llave].placa==req.params.placa)
            mensaje="Se Encontro la placa!!";

    }
    res.json(mensaje);

});

App.put('/asignacion/:id', function(req,res,next) {   
});

App.delete('/vehiculos/:id', function(req,res,next) {   
});