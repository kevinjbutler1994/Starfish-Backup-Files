import db from '../db/connection.js';
import Country from '../models/Country.js';
import countriesData from './countries.json' assert {type: 'json'};
import chalk from 'chalk';

const insertData = async () => {
    //Resert DB
    await db.dropDatabase()

    //Insert Data
    await Country.create(countriesData)
    console.log(chalk.greenBright('Countries created!'));
    // close db connection

    await db.close();
};

insertData();