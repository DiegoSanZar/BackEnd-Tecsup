const { Product,  Category} = require('../models')
const category = require('../models/category')

class ProductController{

    static create(req, res) {
        let payload = req.body
        Product.create(payload)
            .then((data)=>{res.send(data)})
            .catch((error)=>{
                res.status(400).send({
                    message: error.message
                })
            })
    }

    static findAll(req, res) {
        Product.findAll({
            include: {model: Category, as: 'category'}
        })
            .then((data)=>{
                res.send(data)
            })
            .catch((err)=>{
                res.status(404).send({
                    message: err.message
                })
            })
    }
    static update(req, res) {
        //PUT product/:id
        let pk = req.params.id
        let payload = req.body

        Product.update(payload, {where: {id: pk}})
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.status(404).send({
                message: err.message
            })
        })
    }
    static delete(req, res){
        let pk = req.params.id
        Product.destroy({where: {id: pk}})
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.status(200).send({
                message: err.message
            })
        })
    }
    static findOne(req, res){
        let pk = req.params.id
        Product.findByPk(pk)
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.status(200).send({
                message: err.message
            })
        })

    }
}
module.exports = {ProductController}