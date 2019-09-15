const Review = require('../models/review')

module.exports = (req, res) => {
	Review.create(req.body)
	.then(data => {
		Review.findById(data._id).populate('author')
		.then(review => res.send(review))
	}).catch(err => {
		res.send(err)
	})
}
