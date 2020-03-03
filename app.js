const express = require('express')
const bodyParser = require('body-parser');

const app = express()

const arr = ["hello", "zdras'te"]

app.set('view engine', 'hbs')
app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('home', {layout: "templates/layout"})
})

app.post('/form', function (req, res){
    console.log(req.body)
    res.status(200)
})

app.get('/form', function(req, res) {
    res.render('form', {layout: 'templates/layout'})
})

app.get('/users', function (req, res) {
    res.render('users', {layout: 'templates/layout'})
})

app.get('/data', function (req, res) {
    res.json({data: arr})
})

app.listen(3000, () => console.log("listening on 3000"))