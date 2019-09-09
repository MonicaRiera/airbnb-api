const mongoose = require('mongoose')

const Place = mongoose.model('place', {
	amenities: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'amenity'
	}],
	bathrooms: {
		type: Number,
		required: [true, 'Number of bathrooms is required']
	},
	bedrooms: {
		type: Number,
		required: [true, 'Number of bedrooms is required']
	},
	city: {
		type: String,
		required: [true, 'City is required']
	},
	country: {
		type: String,
		required: [true, 'Country is required']
	},
	description: {
		type: String,
		required: [true, 'Description is required']
	},
	guests: {
		type: Number,
		required: [true, 'Number of guests is required']
	},
	host: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: [true, 'Host is required']
	},
	price: {
		type: Number,
		required: [true, 'Price is required']
	},
	reviews: {[
		type: mongoose.Schema.Types.ObjectId,
		ref: 'review'
	]},
	title: {
		type: String,
		required: [true, 'Title is required']
	},
	type: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'type',
		required: [true, 'Type is required']
	},	
	rating: {
		type: Number,
		default: 0
	},
	images: [String]
})

module.exports = Place
