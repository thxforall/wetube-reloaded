import './db';
import './models/video';
import app from './server';

const PORT = 3000;

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
