const mongoose =require('mongoose');
const Schema=mongoose.Schema;

const vehiculosShema=new Schema({
    placa:String,
    marca:String,

})

module.exports=mongoose.model('vehiculos',vehiculosShema);//Para guardar la collecion.
