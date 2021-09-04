const { TicketModel, UserModel } = require('../db')

class TicketController {

    static create(req, res) {
    let data = req.body

    data.saleBy = req.user.id
    //uso el metodo create del ODM
    TicketModel.create(data)
        .then(data =>{
            res.send(data)
        })
        .catch(err => {
            res.status(400). send({
                message: err.message
            })
        })
    }

    static findMyTickets(req, res){
        var query = TickectModel.find({"_id":req.user.id})

        query.exect(function (err, tickets){
            if(err){
                res.sendStatus(401)
            }else{
                
            }
        })
    }

    static findAll(req, res){
        TicketModel.find({
            include: {model: UserModel, as: "saleBy"}
        }, function(err, ticket) {
            if(err) {
                res.sendStatus(404)
            } else{
                res.send(ticket)
            }
        })

    }

    static findByName(req, res){
        var name = req.query.name
        var query = TicketModel.find({buyerName: name})

        query.exec(function (err, ticket) {
            if(err) {
                res.sendStatus(404)
            } else{
                res.send(ticket)
            }          
        })
    }
        // ticket/:id
    static findOne(req, res) {
        let pk = req.params.id
        let query = TicketModel.findById(pk)

        query.exec(function(err, ticket){
            if(err) {
                res.sendStatus(404)
            } else{
                res.send(ticket)
            }          
        })
    }

    static update(req, res){
        let payload = req.body
        let pk = req.params.id

        let query = TicketModel.findByIdAndUpdate(pk, payload)

        query.exec(function(err, ticket){
            if(err) {
                res.sendStatus(404)
            } else{
                res.send(ticket)
            }          
        })
    }
}

module.exports = {TicketController}