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
    const queryStr = 'SELECT * FROM transaction;';
    db.query(queryStr, (err, data) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, data);
      }
    })
  },

  postRecord: function(freshRecord, cb) {
    const queryStr = `INSERT INTO transaction (name, email, password, shippingAdd1, shippingAdd2, city, zipCode, phoneNum, creditCardNum, expiryDate, CVV, billingZipCode) VALUES ('updateMe', 'updateMe', 'updateMe', 'updateMe', 'updateMe', 'updateMe', 'updateMe', 'updateMe', 'updateMe', 'updateMe', 'updateMe', 'updateMe');`;
    db.query(queryStr, (err, result) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, result);
      }
    })
  },

}