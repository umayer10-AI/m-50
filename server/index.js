const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// mongodb+srv://server:A5Vuv8R9nHmNtxPw@cluster0.ywso1qs.mongodb.net/?appName=Cluster0

app.get('/', (req, res) => {
  res.send('Hello World Umayer')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
