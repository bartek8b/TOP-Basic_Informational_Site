import http from 'node:http';
import fs from 'node:fs';

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  let path = './views';
  switch (req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    case '/contact-me':
      path += 'contact-me.html';
      break;
    default:
      path += '404.html';
      break;
  }
});
