const mongoose = require('mongoose')

const User = mongoose.model('user', {
	name: {
		type: String,
		required: [true, 'Name is required']
	},
	email: {
		type: String,
		required: [true, 'Email is required']
	},
	password: {
		type: String,
		required: [true, 'Password is required'],
		select: false
	},
	location: {
		type: String,
		required: [true, 'Location is required'],
	},
	avatar: {
		type: String,
		default: 'https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/anonymous-512.png',
	},
})

module.exports = User
