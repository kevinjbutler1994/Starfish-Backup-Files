import monarchData from '../data/monarchRaw.json' assert { type: 'json' }
import kingdomData from '../data/kingdomRaw.json' assert {type: 'json'}
import mongoose from 'mongoose'
import connection from '../connection.js'
import Monarch from '../../models/Monarch.js'
import Kingdom from '../../models/Kingdom.js'


let monarchyData = monarchData.map(item => {
    const monarch = {}
    
        monarch.name = item.name;
        monarch.house = item.house;
        monarch.start = item.start;
        monarch.end = item.end;
        monarch.endReason = item.endReason;
        monarch.kingdom = item.kingdom;
    
    return monarch
})

Monarch
  .deleteMany({})
  .then(() => Monarch.create(monarchyData))
  .then(() => console.log("Done!"))
  .then(() => mongoose.disconnect())
  .catch(error => console.log("Error", error))


  let kingdomlyData = kingdomData.map(item => {
    const kingdom = {}
    
        kingdom.title = item.title;
        kingdom.extract = item.kingdom;
    
    return kingdom
})


Kingdom
  .deleteMany({})
  .then(() => Kingdom.create(kingdomlyData))
  .then(() => console.log("Done!"))
  .then(() => mongoose.disconnect())
  .catch(error => console.log("Error", error))