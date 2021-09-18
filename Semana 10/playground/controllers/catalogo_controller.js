const {Product} = require('../models')
const {kartItem} = require('../models')
class catalogoController {

    static create(req, res){
        let productData = req.body

        Product.create(productData)
            .then((data)=>{
                res.send(data)
            })
            .catch((err)=>{
                res.status(400).send({message: err.message})
            })
    }

    static list(req, res) {
        Product.findAll()
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=> res.sedStatus(404))
    }

    static listview(req, res) {
        // KartItem.findAll()
        Product.findAll()
        .then((data)=>{
            res.render(__dirname + "/views/catalogo.html", {products: data})
        })
        .catch((err)=>{
            res.status(400).send({message: err.message})
        })
    }
}

module.exports = {catalogoController}