const express = require('express')
const database = require('./database')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

let app = express()
app.use(cors({credentials: true}))

app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())

app.get('/', require('./controllers/root'))
app.get('/places', require('./controllers/getPlaces'))
app.post('/places', require('./controllers/postPlaces'))
app.patch('/places', require('./controllers/patchPlaces'))

app.get('/places/:id', require('./controllers/getPlace'))
app.patch('/places/:id', require('./controllers/patchPlace'))
app.delete('/places/:id', require('./controllers/deletePlace'))

app.get('/types', require('./controllers/getTypes'))
app.post('/types', require('./controllers/postType'))

app.get('/users', require('./controllers/getUsers'))
app.post('/users', require('./controllers/postUser'))
app.patch('/users', require('./controllers/patchUser'))

app.get('/amenities', require('./controllers/getAmenities'))
app.post('/amenities', require('./controllers/postAmenities'))

app.post('/reviews', require('./controllers/postReview'))
app.get('/reviews/:id', require('./controllers/getReviews'))

app.post('/signup', require('./controllers/signup'))
app.post('/login', require('./controllers/login'))
app.get('/auth', require('./controllers/auth'))
//app.post('/reviews'), require('./controllers/postReview')

app.listen(process.env.PORT, () => {
	console.log('Ready on port '+ process.env.PORT)
})
