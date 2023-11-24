const { Client } = require('pg');

require('dotenv').config();

const {DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT} = process.env 

const dbInfo = {
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASSWORD,
    port: DB_PORT
}

class Database extends Client {
    constructor(config) {
        super(config)
        this.connect((err)=> { 
            if (err) throw err;
            console.log("Connected!");
        });
    }

    async checkDBStructureState(){
        const res = await this.query(`SELECT datname FROM pg_catalog.pg_database WHERE datname = '${DB_NAME}'`);

    if (res.rowCount === 0) {
        console.log(`${DB_NAME} database not found, creating it.`);
        await this.query(`CREATE DATABASE "${DB_NAME}";`);
        console.log(`created database ${DB_NAME}`);
    } else {
        console.log(`${DB_NAME} database exists.`);
        }
    }

}






module.exports = new Database(dbInfo);