let errors = require('../utils/error')

module.exports = {
    user: (req, res) => {
        req.assert('name', 'Nome é Obrigatório').notEmpty()
        req.assert('email', 'Email está inválido').notEmpty().isEmail()
        let errs = req.validationErrors()
        if(errs){
            errors.send(errs, req, res)
            return false
        }else
            return true
    }
}