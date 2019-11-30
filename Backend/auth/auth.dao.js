const mongoose = require('mongoose');
const authShema = require('./auth.model');

authShema.statics={
    create: function (data,cb){
        const user = new this(data);
        user.save(cb);
    },
    login: function(query,cb){
        this.find(query,cb);
    }
}

const authModel = mongoose.model('Users',authShema);
module.exports= authModel;
