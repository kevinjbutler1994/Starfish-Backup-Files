import express from 'express'
import connection from './connection.js'
import list from './models/list.js'

const app = express()
app.use(express.json())

app.get('/list', (req, res) => {
  list.find({}).then(lists => {
    res.json(lists)
  })
})

app.get('/list/:id', (req, res) => {
List.find({name: req.params.id}).then(lists => {
  res.json(lists)
})
})

app.post('/list', (req, res) => {
  list.create(req.body).then(list => {
    res.json(list)
  })
})

app.post('/list/:id/item', (req, res) => {
  list.findByIdAndUpdate(
    req.params.id,
    { $push: { items: req.body } },
    { new: true }
  ).then(list => {
    res.json(list)
  })
})

app.listen(3000, () => console.log('we rollin'))


  