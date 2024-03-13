import express from 'express';

const PORT = 3000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send('I love middlewares');
};

app.get('/', logger, handleHome);

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} 😀`);
};

app.listen(PORT, handleListening);
