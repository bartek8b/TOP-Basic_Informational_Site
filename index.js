import express from 'express';

const app = express();

app.use(express.static('public'));

// Dynamic PORT - allow external connections
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});
