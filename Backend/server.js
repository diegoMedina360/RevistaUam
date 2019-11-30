'use strict'
const authRoutes= require('./auth/auth.routes');
const propierties = require('./config/properties');
const DB= require('./config/db');
DB();
const express = require('express');
const app = express();
const router = express.Router();

const bodyParser= require('body-parser');
const bodyParserJSON =  bodyParser.json();
const bodyParserURLEncoded= bodyParser.urlencoded({extended: true});

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use('/api',router)
authRoutes(router);
router.get('/',(req,res)=>{
    res.send('Hello from home');
});

function permitirCrossDomain(req,res,next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
    
}
app.use(permitirCrossDomain);
app.use(router);
app.listen(propierties.PORT, ()=> console.log(`Server runing on port ${propierties.PORT}`));
