import Beverage from './Beverage.js'
import beverageData from './beverage-data.json' assert {type: 'json'}

const addData = async () => {
    await Beverage.deleteMany() => ({})

    const beverages = await Beverage.create(beverageData)
    console.log(beverages)
    process.exit()
}

addData ()