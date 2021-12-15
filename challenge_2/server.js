const express = require('express');
const app = express();
const PORT = 3000;
const csvParser = require('./csvParser.js');

app.use(express.static('client'));

// app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/get', (req, res) => {
  res.send('Hello World!');
})

app.post('/submit', (req, res) => {
  const { text } = req.body;
  csvParser(text, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

