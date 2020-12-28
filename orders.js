var express = require('express')
var router = express.Router()

router.use(function timeLog(req, res, next){
    console.log('Time : ', Date.now())
    next()
})

router.get('/orders', function(req, res){
    res.send('Voici la liste des orders')
})

module.exports = router