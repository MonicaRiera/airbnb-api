const mongoose = require('mongoose')

const Type = mongoose.model('type', {
	name: String
})

module.exports = Type
