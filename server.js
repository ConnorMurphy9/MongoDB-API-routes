const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const mongoose = require('mongoose');
const PORT = process.env.port || 3001;
const app = express();
// mongoose.connect('mongodb://127.0.0.1:27017/myapp');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/test');
// }

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}.`);
    });
  });
  