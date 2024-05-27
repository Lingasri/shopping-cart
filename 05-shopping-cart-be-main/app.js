// app.js

// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const app = express();
const shoppingCartRouter = require('./routes/shoppingCartRoute');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 3500; // Use PORT from environment variable or default to 3500

// Connect to MongoDB using the DB_URL from environment variables
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection();

db.on('error', (errorMessage) => console.log(errorMessage));
db.once('open', () => console.log(`Connected successfully to database`));

app.use(cors());
app.use(express.json());

app.use('/api/v1/shoppingCart', shoppingCartRouter);

app.listen(PORT, () => console.log(`Server started running at http://localhost:${PORT}/api/v1/shoppingCart/`));
