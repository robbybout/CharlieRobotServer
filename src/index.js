const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

app.get('/', (request, response) => {
  response.send('hello world')
})

app.post('/talk', (request, response) => {
  console.log(request.body.text)
  response.sendStatus(200)
})

app.listen(port, () => console.log(`server is up at http://localhost:${port}`));