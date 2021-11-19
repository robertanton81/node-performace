const { parentPort, workerData } = require('worker_threads');
const { getFibonacciNumber } = require('./fibonachi-number');

console.log('1#: execution in fib-worker-one');
parentPort.postMessage(getFibonacciNumber(workerData.num));
