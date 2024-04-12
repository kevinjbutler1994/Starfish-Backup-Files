import express from 'express'
import connection from './db/connection.js'
// const List = require('./models/List')
import List from './models/List.js'   

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello')
})


app.get('/list', (req, res) => {
  List.find({}).then(lists => {
    res.json(lists)
  })
})

app.get('/list/:id', (req, res) => {
  List.findById(req.params.id).then(list => {
    res.json(list)
  })
})

app.get('/list/name/:name', (req, res) => {
    List.find({name: req.params.name}).then(lists => {
      res.json(lists)
  })
})

app.post('/list', (req, res) => {
  List.create(req.body).then(list => {
    res.json(list)
  })
})

app.post('/list/:id/item', (req, res) => {
  List.findByIdAndUpdate(
    req.params.id,
    { $push: { items: req.body } },
    { new: true }
  ).then(list => {
    res.json(list)
  })
})

app.listen(3000, () => console.log('we rollin'))










