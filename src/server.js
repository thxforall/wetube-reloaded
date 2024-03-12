import express from 'express';

const PORT = 3000;

const app = express();

app.get('/', function (req, res) {
  return res.send('Hi hello');
});

app.get('/login', function (req, res) {
  return res.send('Login Here');
});

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} 😀`);
};

app.listen(PORT, handleListening);
