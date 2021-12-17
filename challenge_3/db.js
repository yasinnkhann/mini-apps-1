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

  postRecord: function(cb) {
    const queryStr = `INSERT INTO transaction (name, email, password, shippingAdd1, shippingAdd2, city, zipCode, phoneNum, creditCardNum, expiryDate, CVV, billingZipCode) VALUES ('updateMe', 'updateMe', 'updateMe', 'updateMe', 'updateMe', 'updateMe', 'updateMe', 'updateMe', 'updateMe', 'updateMe', 'updateMe', 'updateMe');`;
    db.query(queryStr, (err, result) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, result);
      }
    })
  },

  updateForm1: function(updatedRecord, cb) {
    const { name, email, password } = updatedRecord;

    const queryStr = `UPDATE transaction SET name = ?, email = ?, password = ? ORDER BY id DESC LIMIT 1;`

    const queryArgs = [name, email, password];

    db.query(queryStr, queryArgs, (err, result) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, result);
      }
    })
  },

  updateForm2: function(updatedRecord, cb) {
    const { shippingAdd1, shippingAdd2, city, zipCode, phoneNum } = updatedRecord;

    const queryStr = `UPDATE transaction SET shippingAdd1 = ?, shippingAdd2 = ?, city = ?, zipCode = ?, phoneNum = ? ORDER BY id DESC LIMIT 1;`

    const queryArgs = [shippingAdd1, shippingAdd2, city, zipCode, phoneNum];

    db.query(queryStr, queryArgs, (err, result) => {
        if (err) {
          cb(err, null);
        } else {
          cb(null, result);
        }
    })
  },

  updateForm3: function(updatedRecord, cb) {
    const { creditCardNum, expiryDate, CVV, billingZipCode } = updatedRecord;

    const queryStr = `UPDATE transaction SET creditCardNum = ?, expiryDate = ?, CVV = ?, billingZipCode = ? ORDER BY id DESC LIMIT 1;`

    const queryArgs = [creditCardNum, expiryDate, CVV, billingZipCode];

    db.query(queryStr, queryArgs, (err, result) => {
        if (err) {
          cb(err, null);
        } else {
          cb(null, result);
        }
    })
  }
}