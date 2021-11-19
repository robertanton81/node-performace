const { parentPort, workerData } = require('worker_threads');
const { getFibonacciNumber } = require('./fibonachi-number');

console.log('2#: execution in fib-worker-two');
parentPort.postMessage(getFibonacciNumber(workerData.num));
