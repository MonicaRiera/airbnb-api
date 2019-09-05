const Place = require('../models/place')

module.exports = (req, res) => {
	Place.create({
		title: 'Unbelievable Infinite Pool',
		description: 'Awesome',
		type: 'Entire Villa',
		city: 'Lamai',
		country: 'Thailand',
		price: 150,
		rating: 4,
		guests: 5,
		bathrooms: 3
	}).then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
}
