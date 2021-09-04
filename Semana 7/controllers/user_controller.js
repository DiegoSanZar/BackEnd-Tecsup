const { UserModel} = require('../db')
const bcrypt = require('bcrypt')

class UserController {

    static signup(req, res) {
        let username = req.body.username
        let password = req.body.password

        bcrypt.genSalt(15, (err, salt)=>{
            bcrypt.hash(password, salt, (err, hash) => {
                password = hash

                let newUser = new UserModel({
                    "username": username,
                    "password": hash
                })

                newUser.save(err =>{
                    if(err) {
                        res.send(err.message)
                    }else {
                        res.send("el usuario se ha registrado con exito :D")
                    }
                })
            })
        })
        
        
    }
}

module.exports = {UserController}