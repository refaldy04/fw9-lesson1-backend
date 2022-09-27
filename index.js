const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  return res.json({
    succes: true,
    message: 'This is Home Page :)',
  });
});

app.use('/', require('./src/routes'));

app.listen(3314, () => {
  console.log(`App is running on port 3314`);
});
