const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  doSomethingAsync().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(err => {
    console.error('Error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    // Simulate a random failure
    const success = Math.random() < 0.8; // 80% chance of success
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});