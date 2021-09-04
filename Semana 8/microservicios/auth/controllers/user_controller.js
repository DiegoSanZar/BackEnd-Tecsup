const bcrypt = require('bcrypt')
const {User} = require('../models')

class UserController {

    static create(req, res){
        let userData = req.body

        let salt = bycript.genSaltSync(12)
        let newPassword = bcrypt.hashSync(userData.newPassword, salt)

        userData.password = newPassword

        User.create(userData)
        .then((data)=>{
            res.send(data)
        }).catch((error)=>{
            res.sendStatus(400)
        })
    }
}

module.exports = {UserController}