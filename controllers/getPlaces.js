const Place = require('../models/place')

module.exports = (req, res) => {
	Place.find(req.query).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
}
