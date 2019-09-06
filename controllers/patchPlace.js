const Place = require('../models/place')

module.exports = (req, res) => {
	Place.findByIdAndUpdate(
		{_id: req.params.id},
		req.body
	)
	.then(data => res.send(data))
	.catch(err => res.send(err))
}
