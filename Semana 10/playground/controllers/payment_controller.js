const {Product} = require('../models')
const mercadopago = require ('mercadopago');

class PaymentController {
    
    static startPayment(req, res){
        mercadopago.configure({
            access_token: process.env.MP_ACCESS_TOKEN
          });
    }

    static startPayment(req, res){
        Product.findByPk(req.params.id)
            .then((data)=>{
                
                let preference = {
                    items: [
                      {
                        title: data.name,
                        unit_price: data.price,
                        quantity: 1,
                      }
                    ],
                    back_url: {
                        succes:'http://localhost:3000/api/products'
                    }

                    };
                    mercadopago.preferences.create(preference)
                    .then(function(data){
                        res.redirect(data.response.sandbox_init_point)
                    }).catch((err)=>{
                        console.log(err)
                    })
                    
            })
    }

    static successfulPayement(req, res) {
        let productId = req.query.external_reference

        Product.findByPk(req.params.id)
            .then((data)=>{
                let new_stock = data.stock -1
            Product.update({stock: new_stock}, {where: {id: productId}})
            .then((data)=>{
                res.redirect('/api/products')
            })
            .catch((err)=>{

            })
            })
    }
}

module.exports = {PaymentController}