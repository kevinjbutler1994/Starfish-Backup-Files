import express from 'express'

const app = express()

app.get('/', (rec, res) => {
    res.send ({hello: 'world'})
})

app.get('/:name', (req, res) => {
    res.send({hello: req.params.name})
})

app.listen(3030, () => {
    console.log('hello kev')
})