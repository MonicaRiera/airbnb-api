const Place = require('../models/place')

module.exports = (req, res) => {
	Place.findOne({_id: req.params.id})
	.then(data => res.send(data))
	.catch(err => res.send(err))
}
