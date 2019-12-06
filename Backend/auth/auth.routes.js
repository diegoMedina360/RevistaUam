const multipart = require('connect-multiparty');  
const multipartMiddleware = multipart({uploadDir: './uploads' });
const Users = require('./auth.controller'); 
module.exports= (router)=>{
    router.post('/register',Users.createUser);
    router.post('/login',Users.loginUser);
    router.post('/createArticulo',Users.createArt);
    router.post('/api/upload', multipartMiddleware, (req, res, next) => {  
        //console.log(req.files.uploads[0].path);
        res.json({
            'message': req.files.uploads[0].path
        });
    });
    router.post('/tipoUsuario',Users.tipoCliente);
    router.get('/listarArticulos',Users.listarArticulos);
    router.post('/listarMisArticulos',Users.listarMisArticulos);
    router.post('/listarArticuloId',Users.listarArticuloId);
    router.get('/listarAutores',Users.listarAutores);
    router.get('/listarPares',Users.listarPares);

}