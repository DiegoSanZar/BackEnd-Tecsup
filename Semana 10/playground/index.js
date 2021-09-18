const express = require('express')
const { catalogoController} = require('./controllers/catalogo_controller')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const {PaymentController} = require('./controllers/payment_controller')
const {karController} = require('./controllers/kart_controller')
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
// Agrega credenciales


dotenv.config()

const app = express()

app.use(bodyParser.json())
app.engine('html', require('ejs').renderFile)
app.set('view_engine', 'html')

app.get('/success', (req, res)=>{
  payment_id = req.query.payment_id
  external_reference = req.query.external_reference
  res.send("Pago exitoso:")
})
app.get('/failure', (req, res)=>{
    res.send("ocurrio un error")
})

app.get('/', (req, res) =>{
    // Crea un objeto de preferencia
    let preference = {
    items: [
      {
        title: 'Manzana',
        unit_price: 5.0,
        quantity: 1,
      }
    ],
    back_urls:{
        success: 'http://localhost:3000/success',
        pending: 'http://localhost:3000/pending',
        failure: 'http://localhost:3000/failure'
    }
    };

    mercadopago.preferences.create(preference)
    .then(function(response){
    // Este valor reemplazará el string "<%= global.id %>" en tu HTML
      global.id = response.body.id;
      res.render(__dirname + "/views/catalogo.html", {global_id: global.id})
    }).catch(function(error){
      console.log(error);
      res.sendStatus(500)
    });
    
   
})

app.post('/api/products', catalogoController.create)
app.get('/api/products.json', CatalogController.list)
app.get('/api/products', CatalogController.listview)
app.get('/api/products/:id/buy', PaymentController.startPayment)
app.get('/api/products/congrats', PaymentController.successfulPayment)

app.listen(3000)