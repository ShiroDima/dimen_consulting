const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Dimen Consulting Backend is listening on port: ${port}`)
})