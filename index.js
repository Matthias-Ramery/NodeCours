const express = require('express')
const router = express.Router()
const app = express()
var orders = require('./orders')

app.use((request, response, next) => {
    console.log('il est : ', Date.now())
    next()
})

app.use('./orders', orders)

app.get('/', (req, res) => {
    res.send('ramery/matthias')
})

app.listen(3000)

/*app.post('/', function (req, res) {
    res.status(201).json({
        message: 'Objet créé !'
    })
})*/
