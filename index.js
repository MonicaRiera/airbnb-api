const express = require('express')
const database = require('./database')
const bodyParser = require('body-parser')

let app = express()

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
app.post('/type', require('./controllers/postType'))

app.post('/users', require('./controllers/postUser'))

app.get('/amenities', require('./controllers/getAmenities'))
app.post('/amenities', require('./controllers/postAmenities'))

app.post('/reviews', require('./controllers/postReviews'))

app.listen(4000, () => {
	console.log('Ready on port 4000')
})
