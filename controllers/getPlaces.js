const Place = require('../models/place')

module.exports = (req, res) => {

	Place.find({price: {$lte: req.query.max_price}})
	.then(data => res.send(data))
	.catch(err => res.send(err))
	let filteredPlaces = []
}
