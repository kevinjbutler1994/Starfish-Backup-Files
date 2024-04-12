import express from 'express'
import connection from './connection.js'
import Bookmark from './models/bookmark.js'

const app = express()


app.get('/', function(req, res) {
    Bookmark.find({}).then(bookmarks => res.json(bookmarks))
})


app.listen(3000, () => console.log('we rollin'))


  