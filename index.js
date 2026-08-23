import express from 'express';
import path from 'path';

const app = express();

// Dynamic PORT - allow external connections
const PORT = process.env.PORT || 3000;

// Static .css file service
app.use(express.static('public'));

// Path to views folder
const viewsPath = path.resolve('views');

// Paths handling
app.get('/', (req, res) => {
  res.sendFile(path.join(viewsPath, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(viewsPath, 'about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(viewsPath, 'contact-me.html'));
});

// Redirects
app.get('/contact', (req, res) => {
  res.redirect('/contact-me');
});

// 404 page
app.use((req, res) => {
  res.sendFile('./views/404.html', { root: __dirname });
});

// Listening for requests
app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});
