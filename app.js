const express = require('express')
const app = express()

app.get('/say1', function (req, res) {
    res.send('Cat Lover v1')
})

// localhost:3000/say/tanakorn/30
app.get('/say/:name/:age', function (req, res) {
    res.send(`hello ${req.params.name}, ${req.params.age}`)
})

// localhost:3000/search?name=macbook&price=999
app.get('/search', function (req, res) {
    res.send(`search: ${req.query.name}, ${req.query.price}`)
})



const port = 3000

app.listen(port, ()=> {
    console.log(`Listening on port: ${port}`);
    console.log("Press Ctrl + C to quit.");
})
