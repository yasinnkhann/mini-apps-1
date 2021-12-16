const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'checkout'
});

db.connect(err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to MySQL!')
  }
})

// module.exports.db = db;

module.exports = {
  getAll: function(cb) {
    const queryStr = 'SELECT * FROM transaction';
    db.query(queryStr, (err, data) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, data);
      }
    })
  },

  postRecord: function(cb) {
    const queryStr = '';
  },

}