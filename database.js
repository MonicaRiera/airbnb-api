const mongoose = require('mongoose')

// let connection = 'mongodb+srv://Monica:Mr3141592021213@cluster0-ypjhv.mongodb.net/sample_airbnb?retryWrites=true&w=majority'
let connection = 'mongodb://localhost:27017/airbnb'

mongoose.connect(connection, {useNewUrlParser:true}, (err) => {
	if (err) {
		console.log(err)
	} else {
		console.log('Connected to MongoDB')
	}
})

module.exports = mongoose
