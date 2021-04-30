const express = require('express');

const PORT = 9000;
const app = express();

const response = require('./testData.json');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.get('/api/v1/test-request', async (req, res, next) => {
  await delay(1000);

  res.send(response);

  next();
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
