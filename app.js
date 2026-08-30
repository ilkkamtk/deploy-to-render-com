import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 10000;

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.get('/api/v1/cat', (req, res) => {
  const cat = {
    cat_id: 1,
    name: 'Fluffy',
    birthdate: '2018-01-01',
    weight: 10,
    owner: 1,
    image: 'https://loremflickr.com/320/240/cat',
  };
  res.json(cat);
});

// Listen only on the port (no hostname) so the process binds to all interfaces.
app.listen(port, () => {
  // eslint-disable-next-line no-undef
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
