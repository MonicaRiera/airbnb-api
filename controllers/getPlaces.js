const Place = require('../models/place')
const Review = require('../models/review')
let promises = []

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

const loopPlaces = (places) => {
	return new Promise((res, rej) => {
		places.forEach(p => {
			promises.push(createPromise(p))
		})
		res(promises)
	})
}

const createPromise = (p) => {
	return new Promise((res, rej) => {
		Review.find({place: p._id}).lean()
		.then(data => {
			p.image = p.images[0]
			delete p.images
			p.reviews = data.length
			if (data.length) {
				let sum = 0
				data.forEach(r => sum += r.rating)
				p.rating = sum / data.length
				console.log(sum)
			}
			res(p)
		})
 	})
}

module.exports = (req, res) => {
	let filter = checkFilters(req)

	Place.find(filter).select('bedrooms city country images price title type').populate('type').lean()
	.then(data => {
		loopPlaces(data)
		.then(promises => {
			Promise.all(promises)
			.then(places => res.send(places))
		})
	})
	.catch(err => res.send(err))
}
