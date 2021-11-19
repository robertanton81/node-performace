process.env.UV_THREADPOOL_SIZE = 1;

const cluster = require('cluster');
const crypto = require('crypto');
const express = require('express');
const app = express();

/**
 * if executed in master mode
 * spin another execution of index.js in child mode
 */
if (cluster.isMaster) {
  console.log('...forking');
  cluster.fork();
  cluster.fork();
  console.log('done forking');
} else {
  // depending on how many forks have been called, that many server instances will be spun of
  console.log('..ready to get some work done');
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
}
