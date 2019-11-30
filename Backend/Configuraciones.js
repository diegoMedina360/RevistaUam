var express= require('express');
var app = express();
var port = process.env.PORT || 1337;
var bodyParser =  require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise= global.Promise;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

function permitirCrossDomain(req,res,next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
    
}
app.use(permitirCrossDomain); 
app.listen(port);
console.log('Servidor escuchando por purto: '+ port);

mongoose.connect('mongodb://127.0.0.1:27017/taller4',{useNewUrlParser: true}).then(()=>{console.log("Exito conexion a la base de Datos taller4!!");}).catch(err=>{console.log('Could not connect to the database. Exiting now....',err);process.exit();});

module.exports=app;
 