const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex',true);
const artiShema= new Schema ({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    autor: {
        type: String,
        required: true,
        trim: true
    },
    par: {
        type: String,
        trim: true
    },
    revisado: {
        type: Boolean,
        trim: true
    },
    publicado: {
        type: Boolean,
        trim: true
    },
    fechaPublicacion: {
        type: Date,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    }

    

},
    {timestamps:true}   
);
 module.exports = artiShema;