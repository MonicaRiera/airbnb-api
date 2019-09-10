const Place = require('../models/place')
const Review = require('../models/review')

const checkFilters = (req) => {
	filter = {}
	if (req.query.max_price) {
		filter.price = {$lte: req.query.max_price}
	}
	if (req.query.min_guests) {
		filter.guests = {$gte: req.query.min_guests}
	}
	return filter
}
// const loopPlaces = (places) => {
// 	// return new Promise((res, rej) => {
// 		places.forEach(place => {
// 			promises.push(getReviews(place))
// 		})
// 		// res(promises)
// 	// })
// }
const getReviews = (p) => {
	return Review.find({place: p._id}).lean()
	.then(reviews => {
		p.img = p.images[0]
		delete p.images
		p.reviews = reviews.length
		p.rating = 0
		if (reviews.length) {
			let sum = 0
			reviews.forEach(r => sum += r.rating)
			p.rating = Math.round(sum / reviews.length)
		}
		return p
	})
}

module.exports = (req, res) => {
	let filter = checkFilters(req)

	Place.find(filter).select('title images type bedrooms city country price').populate('type').lean()
	.then(data => {
		let promises = data.map(d => {
			return getReviews(d)
		})
		Promise.all(promises)
		.then(places => res.send(places))
	})
	.catch(err => res.send(err))


// Place.find(filter)
// .select('-amenities -images')
// .then(data => {
// 	let places = data.map(place => {
// 		return Review.find({place: place._id})
// 		.then(reviews => {
// 			place.reviews = reviews.length
// 			return place
// 		})
// 	})
// 	Promise.all(places).then(data => {
// 		res.send(data)
// 	})
// }).catch(err => {
// 	res.send(err)
// })

}
