const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./connect.js');
const colors = require('colors');
const path = require('path');
const routes = require('./routes/index.js');
const port = 3000
const app = express()

dotenv.config();
connectDB();
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(routes);

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})