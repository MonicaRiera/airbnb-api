const Place = require('../models/place')

module.exports = (req, res) => {
	Place.deleteOne({_id: req.params.id})
	.then(data => res.send(data))
	.catch(err => res.send(err))
}
