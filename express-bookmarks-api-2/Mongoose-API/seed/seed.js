import mongoose from 'mongoose' 
import connection from '../connection.js'
import List from '../models/list.js'

List.deleteMany({})
  .then(() => {
    List.create({
      name: "Kevin's To Do List",
      items: [
        {
          title: 'finish CR lesson',
          status: 'incomplete',
          deadline: 'soon'
        },
        {
          title: 'finish UD lesson',
          status: 'incomplete',
          deadline: 'eod'
        },
        {
          title: 'go home',
          status: 'please',
          deadline: 'not soon enough'
        }
      ]

    })

      .then(() => {
        console.log('done')
        process.exit()
      })

  })