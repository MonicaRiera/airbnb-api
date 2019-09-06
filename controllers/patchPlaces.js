const Place = require('../models/place')

module.exports = (req, res) => {
	Place.updateMany(
		req.query,
		req.body
	)
	.then(data => res.send(data))
	.catch(err => res.send(err))
}
