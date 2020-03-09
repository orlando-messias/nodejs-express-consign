const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const app = express()
app.use(bodyParser.json({limit:'50mb'}))  //todo dado via post converte em json
app.use(bodyParser.urlencoded({extended: false, limit:'50mb'}))
app.use(expressValidator())

consign().include('routes').include('utils').into(app)  // vai incluir todos os arquivos da pasta q foi especificada

app.listen(4000, () => {
    console.log('Conectado')
})
