const crypto = require('crypto');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    res.send('Hello world');
  });
});

app.get('/fast', (req, res) => {
  console.log('hit');
  res.send('.......am I fast ?');
});

app.listen(3000);
