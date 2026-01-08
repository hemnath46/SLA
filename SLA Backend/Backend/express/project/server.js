require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRouter');

const app = express();
app.use(express.json());

connectDB(); 

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use('/', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});