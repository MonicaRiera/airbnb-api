const mongoose = require('mongoose')

const Review = mongoose.model('review', {
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: [true, 'Author is required']
	},
	date: {
		type: Date,
		default: Date.now()
	},
	rating: {
		type: Number,
		default: 0
	},
	content: {
		type: String,
		required: [true, 'Content is required']
	}
})

module.exports = Review
