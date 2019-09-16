const mongoose = require('mongoose')

// let connection = 'mongodb+srv://${process.env.MONGO_ATLAS}@cluster0-ypjhv.mongodb.net/sample_airbnb?retryWrites=true&w=majority'
let connection = process.env.MONGODB_URI

mongoose.connect(connection, {useNewUrlParser:true}, (err) => {
	if (err) {
		console.log(err)
	} else {
		console.log('Connected to MongoDB')
	}
})

module.exports = mongoose
