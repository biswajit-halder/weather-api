const express = require('express');
const dotenv = require('dotenv');
const weatherRoutes = require('./routes/weatherRoutes');


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', weatherRoutes);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});