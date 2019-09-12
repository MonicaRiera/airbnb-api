const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {

	User.findOne({email: req.body.email}).select('email password')
	.then(data => {
		if(data.password == req.body.password) {
			let object = data.toObject()
			let token = jwt.sign(object, 'randomCharacters')
			res.send(token)
		} else {
			res.send('WRONG PASSWORD')
		}
	})
	.catch(err => res.send('USER NOT FOUND: ' + err))
}

//120202 (bcrypt)
// const bcrypt = require('bcrypt')
// let match = bcrypt.compareSync(req.body.password, data.password)
