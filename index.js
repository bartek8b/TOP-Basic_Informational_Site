import http from 'node:http';
import fs from 'node:fs';

const server = http.createServer((req, res) => {
  // Static .css file service
  if (req.url === '/style.css') {
    res.setHeader('Content-Type', 'text/css');

    fs.readFile('./public/style.css', (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('CSS file not found');
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
    return;
  }

  // HTML servce
  res.setHeader('Content-Type', 'text/html');

  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/contact-me':
      path += 'contact-me.html';
      res.statusCode = 200;
      break;
    // Redirect
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      return;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  // Send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end('<strong>500 - Internal Server Error</strong>');
    } else {
      res.end(data);
    }
  });
});

// Dynamic PORT - allow external connections
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});
