const { UserModel } = require("../db")
const jwt = require('jsonwebtoken')

class AuthController {

    static auth(req, res){
        let username = req.body.username
        let password = req.body.password

        UserModel.authenticate(username, password, (err, user)=>{
            if(err){
                err.status = 401
                res.sendStatus(401)
            }else{
                let payload = {id: user.id}
                let secret = process.env.SECRET
                const token = jwt.sign(payload, secret, {expiresIn: '1800s'})
                res.json(token)
            }
        })
    }
}

module.exports = { AuthController}