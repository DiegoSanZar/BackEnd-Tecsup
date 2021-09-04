const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {User} = require('../models')

class AuthController {

    static auth(req, res){
        let authData = req.body

        User.findOne({where:{"username": authData.username}})
            .then((user)=>{

                bcrypt.compare(authData.password, user.password)
                .then((status)=>{
                    let payload = {
                        fullname: user.firstName +" "+user.lastName,
                        username: user.username,
                        email: user.email
                    }
                    let token = jwt.sign(payload, "SECRET", {expiresIn:1800})
                    res.json(token)
                })
                .catch(err =>{
                    res.sendStatus(401)
                })
                })
            .catch(err =>{
                res.sendStatus(401)
            })

                
    }

    static validate(req, res){

    }
}

module.exports = {AuthController}