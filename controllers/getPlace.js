const Place = require('../models/place')
const Review = require('../models/review')

module.exports = (req, res) => {

	Place.findOne({_id: req.params.id})
	.populate('type')
	.populate('host', 'name avatar')
	.populate('amenities')
	.populate({
		path: 'reviews',
		populate: {
			path: 'author',
			select: 'name avatar'
		}
	})
	.lean()
	.then(place => {
		place.img = place.images[0]
		place.rating = 0
		Review.find({place: place._id}).populate('author')
		.lean()
		.then(reviews => {
			place.reviews = reviews
			if (reviews.length) {
				let sum = 0
				reviews.forEach(r => sum += r.rating)
				place.rating = Math.round(sum / reviews.length)
			}
			res.send(place)
		})
	})
	.catch(err => res.send(err))
}
