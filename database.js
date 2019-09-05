const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/airbnb', {useNewUrlParser:true}, (err) => {
	if (err) {
		console.log(err)
	} else {
		console.log('Connected to MongoDB')
	}
})

module.exports = mongoose
