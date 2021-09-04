const {Category} = require('../models')
const { ProductController } = require('./product_controller')

class CategoryController {
    static create(req, res){
        let payload = req.body

        CategoryController.create(payload)
            .then((data)=>{
                res.send(data)
            })
            .catch((err)=>{
                res.status(400).send({
                    message: err.message
                })
            })
    }
    static findAll(req, res){
        Category.findAll({
            include: {
                model: Product, as: 'products'
            }
        })
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.status(400).send({
                message: err.message
            })
        })
    }
    static update(req, res){
        let pk = req.params.id 
        let payload = req.body
        Category.update(payload, {where: {id: pk}})
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.status(404).send({
                message: err.message
            })
        })
    }
    static findOne(req, res){
        Category.findByPk(req.params.id)
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.status(200).send({
                message: err.message
            })
        })
    }
    static findProductsByCategory(req, res) {
        // /category/:id/products
        let category_id = req.params.id

        Product.findAll({
            where: {categoryId: category_id}
        })
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

module.exports = {CategoryController}

