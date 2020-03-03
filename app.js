const express = require('express')

const app = express()

const arr = ["hello", "zdras'te"]

app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('home', {layout: "templates/layout"})
})

app.get('/users', function (req, res) {
    res.render('users', {layout: 'templates/layout'})
})

app.get('/data', function (req, res) {
    res.json({data: arr})
})

app.listen(3000, () => console.log("listening on 3000"))