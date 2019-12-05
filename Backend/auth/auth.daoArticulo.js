const mongoose = require('mongoose');
const artiShema = require('./auth.modelArticulo');

artiShema.statics={
    create: function (data,cb){
        const user = new this(data);
        user.save(cb);
    },
    login: function(query,cb){
        this.find(query,cb);
    }
}

const authModel = mongoose.model('Articulos',artiShema);
module.exports= authModel;
