const Place = require('../models/place')

module.exports = (req, res) => {
	filter = {}
	if (req.query.max_price) {
		filter.price = {$lte: req.query.max_price}
	}

	if (req.query.min_guests) {
		filter.guests = {$gte: req.query.min_guests}
	}
	console.log(filter)
	Place.find(filter).populate('type')
	.then(data => res.send(data))
	.catch(err => res.send(err))
}


// {price: {$lte: req.query.max_price},
// guests: {$gte: req.query.min_guests}}
