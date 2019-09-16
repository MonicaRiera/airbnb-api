const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	let token = req.query.token
	let user = jwt.verify(token, process.env.SECRET)

	User.findById(user._id)
	.then(data => {
		if (req.body.like) {
			console.log('data.likes', data.likes);
			console.log('req.body', req.body);
			data.likes.includes(req.body.like) ?
			data.likes.splice(data.likes.indexOf(req.body.like)) :
			data.likes.push(req.body.like)
		}
		res.send(data)
	})
	.catch(err => res.send(err))
}
