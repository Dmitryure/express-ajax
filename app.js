const express = require('express')
const bodyParser = require('body-parser');

const app = express()

const arr = [1,2,3]

app.set('view engine', 'hbs')
app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('home', {arr: arr})
})

app.post('/form', function (req, res){
    res.status(200).send('form submitted')
})

app.get('/form', function(req, res) {
    res.render('form')
})

app.get('/users', function (req, res) {
    res.render('users')
})

app.get('/data', function (req, res) {
    res.json({data: 1})
})


app.listen(3000, () => console.log("listening on 3000"))