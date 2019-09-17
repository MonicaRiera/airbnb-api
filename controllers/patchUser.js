const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {

	// verify token
	let token = req.query.token
	let user = jwt.verify(token, process.env.SECRET)
	// find user in db
	User.findById(user._id).lean()
	// user.likes
	.then(user => {
		let likes = user.likes.map(l => l.toString())
		
		if (req.body.place) {
			 if (likes.includes(req.body.place)) {
				 user.likes = user.likes.filter(l => l.toString() != req.body.place)
			 } else {
				 user.likes.push(req.body.place)
			 }
		}

		User.findByIdAndUpdate(user._id, user, {new:true})
		.then(updatedUser => {
			res.send(updatedUser);
		})
	})
	.catch(err => res.send(err))
}
