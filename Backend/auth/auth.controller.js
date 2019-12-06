const User= require('./auth.dao');
const Articulo=require('./auth.daoArticulo')
const jwt = require('../node_modules/jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY='secretkey123456';
const fs = require('fs');
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
        //const accessToken = jwt.sign({id:user.id},
        const accessToken = user.cedula;
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
          const t= jwt
          //const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });
          const accessToken = user.cedula;
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

  exports.createArt = (req,res,next)=> {
    console.log("CCCCCCCCCC",req.body);
    //const source = fs.createReadStream(req.body.archivoAdjunto);
    //const destination = fs.createWriteStream("assets/pdf/articulo2.pdf");
    /*fs.rename(req.body.archivoAdjunto, '/tmp/tortadechocolate.pdf', (err) => {
      if (err) throw err;
      console.log('Nombre Editado Satisfactoriamente');
    });
    fs.appendFile('tortasdechocolate.xls', 'tortas', (err) => {
      if (err) throw err;
      console.log('Archivo Creado Satisfactoriamente');
    });*/
    const newArt={
        titulo:req.body.titulo,
        descripcion: req.body.descripcion,
        autor:req.body.autor,
        par: "Sin Asignar",
        revisado:false,
        publicado:false,
        url:req.body.url
    }

    Articulo.create (newArt,(err,user)=>{
        if(err){
          console.log("ERROR",err);
            const error={
                mensaje:"Error Subir"
            }
            return res.send({error});
        } 
        
        const exito={
          mensaje:"Archivo Subido"
      }
            res.send({exito});
    });
}

exports.tipoCliente =  async(req,res,next)=> {
 console.log(req.body.token);
  User.findOne({ cedula: ''+req.body.token}, (err, user) => {
    const error={
        mensaje:"Error"
    }
  if (err) return res.send(err);

  if (!user) {
    // email does not exist
    //res.status(409).send({ message: 'Something is wrong' });
    res.send(error);
  }
    else{
      console.log("tipo: ",user.tipo);
      tipo=user.tipo;
      res.send({tipo});
    }
  //const listav= await User.find();
  //res.json(listav);  
  });
}

exports.listarArticulos =  async(req,res,next)=> { 
  const listav= await Articulo.find();
  res.json(listav);  
}

exports.listarMisArticulos =  async(req,res,next)=> { 
  const listav= await Articulo.find({autor: ''+req.body.token});
  //console.log(listav);
  res.json(listav); 
  
}

//Corregir que no retorne campos importantes
exports.listarAutores =  async(req,res,next)=> { 
  const listav= await User.find({tipo: 'autor'});
  //console.log(listav);
  res.json(listav); 
  
}
exports.listarPares =  async(req,res,next)=> { 
  const listav= await User.find({tipo: 'par'});
  //console.log(listav);
  res.json(listav); 
  
}
exports.listarArticuloId =  async(req,res,next)=> { 
  const listav= await Articulo.findOne({url: req.body.url});
  //console.log(listav);
  res.json(listav); 
  
}
exports.asignarPar =  (req,res,next)=> { 
  console.log("Imprime",req);
  const listav= Articulo.update({_id: req.body._id},{url:'trtrtr'});
  console.log(res);
  console.log(listav);
  res.json(listav); 
  
}

