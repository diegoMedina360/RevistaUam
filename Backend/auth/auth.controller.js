const User= require('./auth.dao');
const jwt = require('../node_modules/jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY='secretkey123456';
exports.createUser = (req,res,next)=> {
    //console.log("CCCCCCCCCC",req.body);
    const newUser={
        name: req.body.name,
        apellido: req.body.apellido,
        email:req.body.email,
        password: bcrypt.hashSync(req.body.password),
        cedula:req.body.cedula,
        genero:req.body.genero,
        direccion:req.body.direccion,
        tipo: req.body.tipo

    }

    User.create (newUser,(err,user)=>{
        if(err){
            const error={
                mensaje:"Email ya existe"
            }
            return res.send({error});
        } 
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

exports.loginUser = (req, res, next) => {
    const userData = {
      email: req.body.email,
      password: req.body.password
    }
   
    User.findOne({ email: userData.email }, (err, user) => {
        const error={
            mensaje:"Datos incorrectos"
        }
      if (err) return res.send({error});
  
      if (!user) {
        // email does not exist
        //res.status(409).send({ message: 'Something is wrong' });
        res.send({error});
      } else {
        const resultPassword = bcrypt.compareSync(userData.password, user.password);
        if (resultPassword) {
          const expiresIn = 24 * 60 * 60;
          const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });
  
          const dataUser = {
            name: user.name,
            email: user.email,
            accessToken: accessToken,
            expiresIn: expiresIn
          }          
          res.send({ dataUser });
        } else {
          // password wrong
          //res.status(409).send({ message: 'Something is wrong' });
          res.send({error});
        }
      }
    });
  }

