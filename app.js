const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const connectDB = require('./config/db');

app.use('/users', require('./Routes/userRoute'));
app.use('/students', require('./Routes/studentRoute'));
app.use('/courses', require('./Routes/courseRoute'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  connectDB();
  console.log(`Example app listening at http://localhost:${port}`);
});
