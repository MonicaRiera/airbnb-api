const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	let token = req.query.token
	let user = jwt.verify(token, process.env.SECRET)

	User.findById(user._id)
	.then(data => {

		if (req.body.place) {

			let likes = data.likes

			likes.includes(req.body.place) ?
			likes.splice(likes.indexOf(req.body.place), 1) :
			likes.push(req.body.place)

			User.findByIdAndUpdate({_id: user._id}, {likes: likes})
			.then(updatedUser => {
				let object = updatedUser.toObject()
				let token = jwt.sign(object, process.env.SECRET)
				res.send({token: token})
			})
		}

	})
	.catch(err => res.send(err))

}
