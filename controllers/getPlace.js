const Place = require('../models/place')

module.exports = (req, res) => {

	Place.findOne({_id: req.params.id}).populate('type').populate('host', 'name avatar').populate('amenities').populate({
		path: 'reviews',
		populate: {
			path: 'author',
			select: 'name avatar'
		}
	})
	//.lean()
	.then(data => {
		//data.rating = (formula)
		res.send(data)
	})
	.catch(err => res.send(err))
}
