import connection from '../connection.js'
import Monarch from '../../models/Monarch.js'



Monarch.update({}, {$set: {kingdom: 'banana'}})

