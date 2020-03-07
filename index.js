const express = require('express')  // carrega o express
const consign = require('consign')  // carrega o consign
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const app = express()
app.use(bodyParser.json())  //todo dado via post converte em json
app.use(bodyParser.urlencoded({extended: false}))
app.use(expressValidator())

consign().include('routes').include('utils').into(app)  // vai incluir todos os arquivos da pasta q foi especificada

app.listen(3000, () => {
    console.log('Conectado')
})
