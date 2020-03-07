
module.exports = app =>{
    
    app.get('/', (req, res) => {
        res.statusCode = 200
        res.end('<h1>Olá</h1)')
    })
}