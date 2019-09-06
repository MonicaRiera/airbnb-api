const express = require('express')
const database = require('./database')
const bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())

app.get('/', require('./controllers/root'))
app.get('/places', require('./controllers/getPlaces'))
app.post('/places', require('./controllers/postPlaces'))

app.listen(4000, () => {
	console.log('Ready on port 4000')
})
