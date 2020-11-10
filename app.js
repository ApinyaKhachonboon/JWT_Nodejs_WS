const express = require('express')
const app = express()

app.get('/say', function (req, res) {
    res.send('Hello Cat')
})

const port = 3000

app.listen(port, ()=> {
    console.log(`Listening on port: ${port}`);
    console.log("Press Ctrl + C to quit.");
})
