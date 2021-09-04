const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {TicketController} = require('./controllers/ticket_controller')
const {UserController} = require('./controllers/user_controller')
const { AuthController } = require('./controllers/auth_controller')

const jwtmiddleware = require('./middleware/jwt_middleware')
const dotenv = require('dotenv')

dotenv.config()

app.use(bodyParser.json())

app.get('/',(req, res) => {
    res.send('Hello world')
})

app.post('/tickets', jwtmiddleware, TicketController.create)
//app.get('/tickets', TicketController.findAll)
app.get('/tickets/search', TicketController.findByName)
//app.get('/ticket/:id', TicketController.findOne)
app.put('/ticket/:id', TicketController.update)
//app.get('/tickets/me')


//app.get(/^\/ticket[s]{0,1}\/:id/, TicketController.findOne)

app.get(/^\/(tickets|entradas)$/, TicketController.findAll)

app.post('/signup', UserController.signup)
app.post('/login', AuthController.auth)
app.listen(3000, () =>{
    console.log("Server running :)")
})