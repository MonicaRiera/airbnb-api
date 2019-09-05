const express = require('express')
const mongoose = require('mongoose')

let app = express()

mongoose.connect('mongodb://localhost:27017/airbnb', {useNewUrlParser:true}, (err) => {
	if (err) {
		console.log(err)
	} else {
		console.log('Connected to MongoDB')
	}
})

app.get('/', require('./controllers/root'))
app.get('/places', require('./controllers/getPlaces'))

app.listen(4000, () => {
	console.log('Ready on port 4000')
})
