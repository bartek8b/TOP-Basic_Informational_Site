import express from 'express';

const app = express();

// Dynamic PORT - allow external connections
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});

// Static .css file service
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('/views/index.html');
});

app.get('/about', (req, res) => {
  res.send('/views/about.html');
});

app.get('/contact-me', (req, res) => {
  res.send('/views/contact-me.html');
});

app.get('/', (req, res) => {
  res.send('/views/index.html');
});
