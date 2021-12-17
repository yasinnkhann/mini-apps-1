const express = require('express');
const app = express();
const PORT = 3000;
const { getAll, postRecord, updateForm1, updateForm2, updateForm3 } = require('./db.js');

app.use(express.static('public'));

app.use(express.json());

app.get('/get', (req, res) => {
  getAll((err, data) => {
    if (err) {
      res.status(404).json('No data found');
    } else {
      res.status(200).json(data);
    }
  })
})

app.post('/post', (req, res) => {
  postRecord((err, record) => {
    if (err) {
      res.status(400).json('Not able to post record');
    } else {
      res.status(201).json('Successfully posted!');
    }
  })
})

app.put('/put/form1', (req, res) => {
  updateForm1(req.body, (err, record) => {
    if (err) {
      res.status(400).json('Not able to update record');
    } else {
      res.status(200).json('Successfully updated!');
    }
  })
})

app.put('/put/form2', (req, res) => {
  updateForm2(req.body, (err, record) => {
    if (err) {
      res.status(400).json('Not able to update record');
    } else {
      res.status(200).json('Successfully updated!');
    }
  })
})

app.put('/put/form3', (req, res) => {
  updateForm3(req.body, (err, record) => {
    if (err) {
      res.status(400).json('Not able to update record');
    } else {
      res.status(200).json('Successfully updated!');
    }
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
})