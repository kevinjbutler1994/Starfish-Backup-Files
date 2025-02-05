import db from '../db/connection.js';
import Character from '../models/Character.js';
import House from '../models/House.js';
import charactersData from './characters.json' assert {type: 'json'};
import housesData from './houses.json' assert {type: 'json'};
import chalk from 'chalk';

const insertData = async () => {
    //Resert DB
    await db.dropDatabase()

    //Insert Data
    await Character.create(charactersData)
    await House.create(housesData);
    console.log(chalk.greenBright('Characters and Houses created!'));
    // close db connection

    await db.close();
};

insertData();