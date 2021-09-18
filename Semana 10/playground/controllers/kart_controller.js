const {kartItem} = require('../models')
class KarController {

    static create(req, res){
        let productId = req.params.id

        kartItem.findOne({where: {product_id: productId}})
            .then((data)=>{
                let new_quantity = data.quantity + 1
                kartItem.update({quantity: new_quantity}, {where: {id: data}})
                    .then((data)=>{
                        res.redirect('/api/products')
                    })
                    .catch((err)=>{res.sendStatus(500)})
            })
            .catch((err)=>{
                kartItem.create({
                    product_id: productId,
                    quantity: 1
                })
                .then((data)=>{
                    res.redirect('/api/products')
                })
            })
    }
}

module.exports = {KarController}