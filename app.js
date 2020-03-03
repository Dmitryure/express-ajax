const express = require('express')
const path = require("path")

const app = express()

app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('home', {layout: "templates/layout"})
})

app.get('/users', function (req, res) {
    res.render('users', {layout: 'templates/layout'})
})

app.listen(3000, () => console.log("listening on 3000"))