// server configuration, import

import "./db";
import "./models/Video";
import app from "./server";

const PORT = 4000;

const controllerListening = () =>
  console.log(`Server listneing on port http://localhost:${PORT} 🚀`);

app.listen(PORT, controllerListening);
