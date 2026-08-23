import express from 'express';

const app = express();

// Dynamic PORT - allow external connections
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});

// Static .css file service
app.use(express.static('public'));

// Listen for requests
app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/contact-me', (req, res) => {
  res.sendFile('./views/contact-me.html', { root: __dirname });
});

// Redirects
app.get('/contact', (req, res) => {
  res.redirect('/contact-me');
});

// 404 page
app.use((req, res) => {
  res.sendFile('./views/404.html', { root: __dirname });
});
