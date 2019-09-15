const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	let token = req.query.token
	let user = jwt.verify(token, 'randomCharacters')
	delete user.password
	res.send(user)
}
