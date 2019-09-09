const Place = require('../models/place')
const Review = require('../models/review')

const findReviews = (place) => {
	return new Promise((res, rej) => {
		Review.find({place: place._id}).lean()
		.then(reviews => {
			if (reviews.length) {
				let sum = 0
				reviews.forEach(r => sum += r.rating)
				place.rating = sum / reviews.length
				console.log(sum)
				console.log(place)
			}
			res(place)
		})
	})
}

module.exports = (req, res) => {

	Place.findOne({_id: req.params.id}).populate('type').populate('host', 'name avatar').populate('amenities').populate({
		path: 'reviews',
		populate: {
			path: 'author',
			select: 'name avatar'
		}
	})
	.lean()
	.then(place => {
		findReviews(place)
		.then(place => res.send(place))
	})
	.catch(err => res.send(err))
}
