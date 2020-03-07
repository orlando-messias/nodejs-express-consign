let errors = require('../utils/error')
let validator = require('../utils/validator')

let NeDb = require('nedb')
let db = new NeDb({
    filename: 'users.db',
    autoload: true
})

module.exports = app => {

    app.get('/users', (req, res) => {
        db.find({}).sort({name:1}).exec((err, users) => {
            if(err){
               errors.send(err, req, res)   // ALTERE DEPOIS USANDO CONSIGN OK?
            }else{
                res.json({
                    users: users
                })
            }
        })  
    })
    
    app.post('/users', (req, res) => {
        
        if(!validator.user(req, res))
            return false
        
        db.insert(req.body, (err, user) => {
            if(err){
                errors.send(err, req, res)
            }else{
                res.status(200).json(user)
            }
        })
    })

    app.get('/users/:id', (req, res) => {
        db.findOne({_id: req.params.id}).exec((err, user) => {
            if(err)
                errors.send(err, req, res)
            else    
                res.status(200).json(user)
        })
    })

    app.put('/users/:id', (req, res) => {
        db.update({_id: req.params.id}, req.body, err => {
            if(err)
                errors.send(err, req, res)
            else
                res.status(200).json(Object.assign(req.body, req.params))
        })
    })

    app.delete('/users/:id', (req, res) => {
        db.remove({_id: req.params.id}, {}, err => {
            if(err)
                errors.send(err, req, res)
            else
                res.status(200).json(req.params)
        })
    })
}