const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

async function setup() {
    const db = await sqlite.open('./mydb.sqlite')
    await db.migrate({force:'last'})
}
setup()