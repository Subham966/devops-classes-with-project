const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Hello from Node.js inside Docker!');
});

const PORT = 4000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`App listening on port ${PORT}`);
});
