const User= require('./auth.dao');
const jwt = require('../node_modules/jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY='secretkey123456';
exports.createUser = (req,res,next)=> {
    //console.log("CCCCCCCCCC",req.body);
    const newUser={
        name: req.body.name,
        email:req.body.email,
        password: bcrypt.hashSync(req.body.password)
    }

    User.create (newUser,(err,user)=>{
        if(err) return res.status(500).send('Server error');
        const expiresIn=24*60*60;
        const accessToken = jwt.sign({id:user.id},
            SECRET_KEY,{expiresIn:expiresIn
            });
            const dataUser={
                name: user.name,
                email: user.email,
                accessToken: accessToken,
                expiresIn: expiresIn
            }
            res.send({dataUser});
    });
}

exports.loginUser =(req,res,next)=>{
    const userData ={
        email: req.body.email,
        password: req.body.password
    }
    User.findOne({email: userData.email},(err,user)=>{
        if(err) return res.status(500).send('server error!');
        if(!user){
            //email no existe
            res.status(409).send({message:'Something is wrong'});
        }
        else{
            const resultPasssword= userData.password;
            if(resultPasssword){
                const expiresIn=24*60*60;
                const accessToken= jwt.sign({id: user.id},SECRET_KEY,{expiresIn: expiresIn});
                res.send({userData});
            }
            else{
                //contrasena incorrecta
                res.status(409).send({message:'Something is wrong'});
            }
        }
    })
}
