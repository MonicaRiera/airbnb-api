const express = require('express')
let app = express()

app.get('/', require('./controllers/root'))
app.get('/places', (req, res) => {
	res.send(
		require('./getPlaces')
	)
})

app.listen(4000, () => {
	console.log('Ready on port 4000')
})
