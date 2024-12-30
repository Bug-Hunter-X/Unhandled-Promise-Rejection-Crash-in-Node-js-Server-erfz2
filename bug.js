const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  doSomethingAsync().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(err => {
    // Error handling is missing here! The server will crash if the promise rejects
    console.error('Error:', err);
    //The response is not handled for error conditions and the connection is not closed properly 
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