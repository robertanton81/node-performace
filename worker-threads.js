const { Worker } = require('worker_threads');

let number = 10;
const start = Date.now();

/**
 * first worker
 */
const workerOne = new Worker('./fib-worker-one.js', {
  workerData: { num: number },
});

workerOne.once('message', (result) => {
  console.log(`1#: ${number}th Fibonacci No: ${result}`);
  console.log(`1#: process took ${Date.now() - start} ms`);
});

workerOne.on('error', (error) => {
  console.log(error);
});

workerOne.on('exit', (exitCode) => {
  console.log(`1#: exited with code ${exitCode}`);
});

/**
 * second worker
 */
const workerTwo = new Worker('./fib-worker-two.js', {
  workerData: { num: number },
});

workerTwo.once('message', (result) => {
  console.log(`2#: ${number}th Fibonacci No: ${result}`);
  console.log(`2#: process took ${Date.now() - start} ms`);
});

workerTwo.on('error', (error) => {
  console.log(error);
});

workerTwo.on('exit', (exitCode) => {
  console.log(`2#: exited with code ${exitCode}`);
});

/**
 * main thread
 */
console.log(
  'main#: Execution in main thread would be blocked, if not using worker threads'
);
