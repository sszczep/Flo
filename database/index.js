const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// Create database instance
function createDatabase() {
  const adapter = new FileSync('./database/database.json');
  const db = lowdb(adapter);

  db.defaults({ channels: [] }).write();

  return db;
}

// Return database instance
module.exports = createDatabase();
