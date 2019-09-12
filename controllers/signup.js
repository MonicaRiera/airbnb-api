const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	User.create(req.body).then(data => {
		let object = data.toObject()
		let token = jwt.sign(object, 'randomCharacters')
		res.send({token: token})
	})
}

// 120104
// const bcrypt = require('bcrypt')
// req.body.password = bcrypt.hashSync(req.body.password, 10)
